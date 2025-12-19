"use client";

import { useState } from "react";
import { MessageSquare, Send, User, ChevronLeft } from "lucide-react";

export default function WhatsAppWeb() {
    const [selectedChat, setSelectedChat] = useState<any>(null);

    const chats = [
        { id: 1, name: "João Silva (ConstruTech)", lastMessage: "Pode me enviar o PCMSO?", time: "10:30", unread: 2 },
        { id: 2, name: "Maria Oliveira (LogExpress)", lastMessage: "Obrigada pelo retorno.", time: "09:15", unread: 0 },
        { id: 3, name: "Pedro Santos (Indústria Metal)", lastMessage: "Agendamento confirmado.", time: "Ontem", unread: 0 },
    ];

    return (
        <div className="whatsapp-page card">
            <div className="whatsapp-grid">
                <div className="chat-list">
                    <div className="sidebar-title">Conversas via WhatsApp</div>
                    {chats.map(chat => (
                        <div
                            key={chat.id}
                            className={`chat-item ${selectedChat?.id === chat.id ? "active" : ""}`}
                            onClick={() => setSelectedChat(chat)}
                        >
                            <div className="avatar"><User size={20} /></div>
                            <div className="chat-info">
                                <div className="chat-top">
                                    <span className="chat-name">{chat.name}</span>
                                    <span className="chat-time">{chat.time}</span>
                                </div>
                                <div className="chat-bottom">
                                    <span className="chat-msg">{chat.lastMessage}</span>
                                    {chat.unread > 0 && <span className="unread-badge">{chat.unread}</span>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="chat-window">
                    {selectedChat ? (
                        <>
                            <div className="chat-header">
                                <div className="avatar"><User size={20} /></div>
                                <div>
                                    <div className="chat-name">{selectedChat.name}</div>
                                    <div className="chat-status">Online</div>
                                </div>
                            </div>
                            <div className="messages-area">
                                <div className="message received">
                                    Olá! Gostaria de saber quais documentos preciso para o exame.
                                    <span className="msg-time">10:25</span>
                                </div>
                                <div className="message sent">
                                    Bom dia, João! Para o ASO você precisa trazer o RG e o último laudo se tiver.
                                    <span className="msg-time">10:28</span>
                                </div>
                                <div className="message received">
                                    {selectedChat.lastMessage}
                                    <span className="msg-time">10:30</span>
                                </div>
                            </div>
                            <div className="input-area">
                                <input type="text" placeholder="Digite uma mensagem..." />
                                <button className="btn-send"><Send size={20} /></button>
                            </div>
                        </>
                    ) : (
                        <div className="empty-chat">
                            <MessageSquare size={48} />
                            <p>Selecione uma conversa para começar o atendimento.</p>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
        .whatsapp-page {
          height: calc(100vh - 200px);
          padding: 0;
          display: flex;
          overflow: hidden;
        }
        .whatsapp-grid {
          display: grid;
          grid-template-columns: 350px 1fr;
          width: 100%;
        }
        .chat-list {
          border-right: 1px solid var(--border);
          overflow-y: auto;
        }
        .sidebar-title {
          padding: 1.5rem;
          font-weight: 700;
          border-bottom: 1px solid var(--border);
        }
        .chat-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          cursor: pointer;
          transition: background 0.2s;
          border-bottom: 1px solid #f1f5f9;
        }
        .chat-item:hover { background: #f8fafc; }
        .chat-item.active { background: #f1f5f9; border-left: 4px solid var(--primary); }
        
        .avatar {
          width: 48px;
          height: 48px;
          background: #e2e8f0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          flex-shrink: 0;
        }
        .active .avatar { background: var(--accent); color: var(--primary); }
        
        .chat-info { flex: 1; overflow: hidden; }
        .chat-top { display: flex; justify-content: space-between; margin-bottom: 0.25rem; }
        .chat-name { font-weight: 600; font-size: 0.95rem; }
        .chat-time { font-size: 0.75rem; color: #94a3b8; }
        .chat-bottom { display: flex; justify-content: space-between; align-items: center; }
        .chat-msg { font-size: 0.85rem; color: #64748b; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .unread-badge { background: var(--primary); color: white; border-radius: 50%; width: 18px; height: 18px; font-size: 10px; display: flex; align-items: center; justify-content: center; font-weight: 700; }
        
        .chat-window {
          display: flex;
          flex-direction: column;
          background: #f8fafc;
        }
        .chat-header {
          padding: 1rem 2rem;
          background: white;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .chat-status { font-size: 0.75rem; color: var(--primary); font-weight: 600; }
        
        .messages-area {
          flex: 1;
          padding: 2rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .message {
          max-width: 70%;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          font-size: 0.95rem;
          position: relative;
        }
        .message.received {
          align-self: flex-start;
          background: white;
          border-bottom-left-radius: 2px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }
        .message.sent {
          align-self: flex-end;
          background: var(--accent);
          color: var(--primary-hover);
          border-bottom-right-radius: 2px;
        }
        .msg-time {
          display: block;
          font-size: 0.7rem;
          text-align: right;
          margin-top: 0.25rem;
          opacity: 0.7;
        }
        
        .input-area {
          padding: 1.5rem 2rem;
          background: white;
          border-top: 1px solid var(--border);
          display: flex;
          gap: 1rem;
        }
        .input-area input {
          flex: 1;
          padding: 0.75rem 1.25rem;
          border-radius: 25px;
          border: 1px solid var(--border);
          background: var(--muted);
          outline: none;
        }
        .btn-send {
          background: var(--primary);
          color: white;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .empty-chat {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          gap: 1rem;
        }
      `}</style>
        </div>
    );
}
