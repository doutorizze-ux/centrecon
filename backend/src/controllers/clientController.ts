import { Request, Response } from 'express';
import { prisma } from '../index';

export const createClient = async (req: Request, res: Response) => {
    try {
        const client = await prisma.client.create({
            data: req.body
        });
        res.status(201).json(client);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar cliente', error });
    }
};

export const getClients = async (req: Request, res: Response) => {
    try {
        const clients = await prisma.client.findMany({
            include: {
                exams: true,
                appointments: true
            }
        });
        res.json(clients);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar clientes', error });
    }
};

export const getClientById = async (req: Request, res: Response) => {
    try {
        const client = await prisma.client.findUnique({
            where: { id: req.params.id },
            include: {
                exams: true,
                appointments: true,
                documents: true
            }
        });
        if (!client) return res.status(404).json({ message: 'Cliente não encontrado' });
        res.json(client);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar cliente', error });
    }
};
