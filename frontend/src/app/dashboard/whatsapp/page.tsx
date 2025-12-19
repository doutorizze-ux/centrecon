"use client";

import { useState } from "react";
import { Send, Search, Paperclip, MoreVertical, CheckCheck } from "lucide-react";

export default function WhatsAppWeb() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, text: "Olá! Gostaria de agendar um exame admissional.", sender: "client", time: "10:30" },
    { id: 2, text: "Claro! Para qual cargo seria?", sender: "me", time: "10:32" },
  ]);

  const chats = [
    { id: 1, name: "Metalúrgica ABC", lastMsg: "Claro! Para qual cargo seria?", time: "10:32", unread: 0, avatar: "M" },
    { id: 2, name: "João Silva", lastMsg: "Obrigado pelo envio.", time: "09:15", unread: 2, avatar: "J" },
    { id: 3, name: "Construtora Norte", lastMsg: "Aguardando orçamento.", time: "Ontem", unread: 0, avatar: "C" },
  ];

  const handleSend = () => {
    if (!messageInput.trim()) return;
    setMessages([...messages, {
      id: Date.now(),
      text: messageInput,
      sender: "me",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
    setMessageInput("");
  };

  return (
    <div className="wa-layout">
      <div className="wa-sidebar">
        <div className="wa-header">
          <h2>Chats</h2>
          <div className="wa-actions">
            <MoreVertical size={20} color="#64748b" />
          </div>
        </div>
        <div className="wa-search">
          <div className="search-box">
            <Search size={18} color="#94a3b8" />
            <input type="text" placeholder="Pesquisar conversa" />
          </div>
        </div>
        <div className="chat-list">
          {chats.map(chat => (
            <div
              key={chat.id}
              className={`chat-item ${selectedChat === chat.id ? "active" : ""}`}
              onClick={() => setSelectedChat(chat.id)}
            >
              <div className="chat-avatar">{chat.avatar}</div>
              <div className="chat-info">
                <div className="chat-top">
                  <span className="chat-name">{chat.name}</span>
                  <span className="chat-time">{chat.time}</span>
                </div>
                <div className="chat-bottom">
                  <span className="chat-preview">{chat.lastMsg}</span>
                  {chat.unread > 0 && <span className="unread-badge">{chat.unread}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="wa-main">
        {selectedChat ? (
          <>
            <div className="wa-chat-header">
              <div className="chat-avatar-sm">M</div>
              <div className="wa-chat-details">
                <span className="chat-header-name">Metalúrgica ABC</span>
                <span className="chat-status">Online</span>
              </div>
              <div className="wa-header-actions">
                <Search size={20} />
                <MoreVertical size={20} />
              </div>
            </div>

            <div className="wa-messages">
              {messages.map(msg => (
                <div key={msg.id} className={`message-row ${msg.sender === 'me' ? 'sent' : 'received'}`}>
                  <div className="message-bubble">
                    <p>{msg.text}</p>
                    <div className="msg-meta">
                      <span>{msg.time}</span>
                      {msg.sender === 'me' && <CheckCheck size={14} className="read-check" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="wa-input-area">
              <button className="attach-btn"><Paperclip size={20} /></button>
              <input
                type="text"
                placeholder="Digite uma mensagem"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button className="send-btn" onClick={handleSend}>
                <Send size={20} />
              </button>
            </div>
          </>
        ) : (
          <div className="wa-placeholder">
            <div className="placeholder-icon">
              <Send size={48} />
            </div>
            <h3>WhatsApp Web Integrado</h3>
            <p>Selecione uma conversa para iniciar o atendimento.</p>
          </div>
        )}
      </div>

      <style jsx>{`
                .wa-layout {
                    display: flex;
                    height: calc(100vh - 140px);
                    background: white;
                    border-radius: 20px;
                    border: 1px solid var(--border);
                    overflow: hidden;
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
                }
                
                /* Sidebar */
                .wa-sidebar {
                    width: 350px;
                    border-right: 1px solid var(--border);
                    display: flex;
                    flex-direction: column;
                    background: white;
                }
                .wa-header {
                    padding: 1.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .wa-header h2 { font-size: 1.25rem; color: var(--secondary); }
                .wa-search { padding: 0 1rem 1rem; }
                .search-box {
                    background: #f1f5f9;
                    border-radius: 12px;
                    padding: 0.75rem 1rem;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }
                .search-box input { border: none; background: transparent; width: 100%; outline: none; }
                
                .chat-list { flex: 1; overflow-y: auto; }
                .chat-item {
                    display: flex;
                    gap: 1rem;
                    padding: 1rem 1.5rem;
                    cursor: pointer;
                    transition: 0.2s;
                    border-bottom: 1px solid #f8fafc;
                }
                .chat-item:hover { background: #f8fafc; }
                .chat-item.active { background: #eff6ff; border-left: 3px solid var(--primary); }
                
                .chat-avatar {
                    width: 48px;
                    height: 48px;
                    background: #e2e8f0;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    color: var(--secondary);
                }
                .chat-info { flex: 1; min-width: 0; }
                .chat-top { display: flex; justify-content: space-between; margin-bottom: 0.25rem; }
                .chat-name { font-weight: 600; font-size: 0.95rem; color: var(--secondary); }
                .chat-time { font-size: 0.75rem; color: var(--muted); }
                .chat-bottom { display: flex; justify-content: space-between; align-items: center; }
                .chat-preview { font-size: 0.85rem; color: var(--muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
                .unread-badge { background: var(--primary); color: white; font-size: 0.7rem; font-weight: 700; padding: 2px 6px; border-radius: 10px; }

                /* Main Chat */
                .wa-main { flex: 1; display: flex; flex-direction: column; background: #f0f4f8; position: relative; }
                
                .wa-chat-header {
                    background: white;
                    padding: 1rem 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    border-bottom: 1px solid var(--border);
                }
                .chat-avatar-sm { width: 40px; height: 40px; background: #e2e8f0; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; }
                .wa-chat-details { flex: 1; display: flex; flex-direction: column; }
                .chat-header-name { font-weight: 600; color: var(--secondary); }
                .chat-status { font-size: 0.8rem; color: var(--primary); }
                .wa-header-actions { display: flex; gap: 1rem; color: var(--muted); }
                
                .wa-messages { flex: 1; padding: 2rem; overflow-y: auto; display: flex; flex-direction: column; gap: 1rem; }
                .message-row { display: flex; }
                .message-row.sent { justify-content: flex-end; }
                .message-row.received { justify-content: flex-start; }
                
                .message-bubble {
                    padding: 0.75rem 1rem;
                    border-radius: 12px;
                    max-width: 60%;
                    position: relative;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
                }
                .sent .message-bubble { background: #dcfce7; color: var(--secondary); border-top-right-radius: 2px; }
                .received .message-bubble { background: white; color: var(--secondary); border-top-left-radius: 2px; }
                
                .msg-meta { display: flex; align-items: center; gap: 0.25rem; justify-content: flex-end; margin-top: 0.25rem; font-size: 0.7rem; opacity: 0.7; }
                .read-check { color: var(--primary); }
                
                .wa-input-area {
                    background: white;
                    padding: 1rem 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    border-top: 1px solid var(--border);
                }
                .attach-btn, .send-btn { background: none; border: none; cursor: pointer; color: var(--muted); padding: 0.5rem; border-radius: 50%; transition: 0.2s; }
                .send-btn { background: var(--primary); color: white; }
                .send-btn:hover { background: var(--primary-dark); }
                .wa-input-area input { flex: 1; padding: 0.75rem 1rem; border-radius: 20px; border: 1px solid var(--border); outline: none; }
                
                .wa-placeholder { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: var(--muted); text-align: center; }
                .placeholder-icon { width: 80px; height: 80px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 2rem; box-shadow: 0 4px 6px rgba(0,0,0,0.05); color: var(--primary); }
            `}</style>
    </div>
  );
}
