import makeWASocket, {
    DisconnectReason,
    useMultiFileAuthState,
    fetchLatestBaileysVersion,
    delay
} from '@whiskeysockets/baileys';
import { Boom } from '@hapi/boom';
import path from 'path';
import fs from 'fs';
import { prisma } from '../index';
import { generateAIResponse } from './aiService';

let sock: any = null;

export const initWhatsApp = async () => {
    const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys');
    const { version } = await fetchLatestBaileysVersion();

    sock = makeWASocket({
        version,
        auth: state,
        printQRInTerminal: true,
    });

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('connection.update', (update: any) => {
        const { connection, lastDisconnect, qr } = update;
        if (qr) {
            console.log('New QR Code generated');
        }
        if (connection === 'close') {
            const shouldReconnect = (lastDisconnect.error as Boom)?.output?.statusCode !== DisconnectReason.loggedOut;
            console.log('Connection closed due to ', lastDisconnect.error, ', reconnecting ', shouldReconnect);
            if (shouldReconnect) {
                initWhatsApp();
            }
        } else if (connection === 'open') {
            console.log('WhatsApp connection opened');
        }
    });

    sock.ev.on('messages.upsert', async (m: any) => {
        if (m.type === 'notify') {
            for (const msg of m.messages) {
                if (!msg.key.fromMe && msg.message) {
                    const from = msg.key.remoteJid;
                    const text = msg.message.conversation || msg.message.extendedTextMessage?.text;

                    if (text) {
                        console.log(`Message from ${from}: ${text}`);

                        // Save message to DB
                        await prisma.message.create({
                            data: {
                                fromMe: false,
                                text,
                                whatsapp: from,
                            }
                        });

                        // Handle with AI
                        const response = await generateAIResponse(text, from);
                        if (response) {
                            await sock.sendMessage(from, { text: response });

                            // Save response to DB
                            await prisma.message.create({
                                data: {
                                    fromMe: true,
                                    text: response,
                                    whatsapp: from,
                                }
                            });
                        }
                    }
                }
            }
        }
    });

    return sock;
};

export const getSocket = () => sock;
