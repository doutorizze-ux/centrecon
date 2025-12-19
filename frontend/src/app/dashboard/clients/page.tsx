"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Search, Plus, MoreHorizontal, FileText, Ban, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  cnpj: string;
  status: string;
}

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const token = localStorage.getItem("token");
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
        const response = await axios.get(`${apiUrl}/api/clients`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setClients(response.data);
      } catch (error) {
        console.error("Erro ao buscar clientes", error);
        // Mock data fallback
        setClients([
          { id: 1, name: "Indústria Metalúrgica do Sul", email: "contato@metalsul.com", phone: "(11) 99999-1234", cnpj: "12.345.678/0001-90", status: "Ativo" },
          { id: 2, name: "Comércio de Alimentos LTDA", email: "financeiro@alimentos.com", phone: "(11) 98888-5678", cnpj: "98.765.432/0001-10", status: "Pendente" },
          { id: 3, name: "Tech Solutions S.A.", email: "rh@techsol.com", phone: "(21) 97777-4321", cnpj: "45.678.901/0001-23", status: "Ativo" },
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchClients();
  }, []);

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Clientes</h1>
          <p className="page-subtitle">Gerencie as empresas parceiras e seus status.</p>
        </div>
        <button className="btn btn-emerald">
          <Plus size={18} /> Novo Cliente
        </button>
      </div>

      <div className="toolbar">
        <div className="search-wrapper">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Buscar por nome, email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="table-container">
        <table className="modern-table">
          <thead>
            <tr>
              <th>Empresa</th>
              <th>Contato</th>
              <th>CNPJ</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={5} className="text-center">Carregando...</td></tr>
            ) : filteredClients.map((client, idx) => (
              <motion.tr
                key={client.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <td>
                  <div className="client-info">
                    <div className="client-avatar">{client.name.substring(0, 2).toUpperCase()}</div>
                    <div>
                      <span className="client-name">{client.name}</span>
                      <span className="client-sub">{client.email}</span>
                    </div>
                  </div>
                </td>
                <td>{client.phone}</td>
                <td>{client.cnpj}</td>
                <td>
                  <span className={`status-badge ${client.status === 'Ativo' ? 'active' : 'pending'}`}>
                    {client.status === 'Ativo' ? <CheckCircle size={14} /> : <Ban size={14} />}
                    {client.status}
                  </span>
                </td>
                <td>
                  <div className="actions">
                    <button className="action-btn"><FileText size={18} /></button>
                    <button className="action-btn"><MoreHorizontal size={18} /></button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
                .page-container { padding: 0.5rem; }
                .page-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2rem; }
                .page-title { font-size: 1.75rem; color: var(--secondary); margin-bottom: 0.25rem; }
                .page-subtitle { color: var(--muted); }
                
                .toolbar { margin-bottom: 1.5rem; }
                .search-wrapper { position: relative; max-width: 400px; }
                .search-icon { position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: #94a3b8; }
                .search-wrapper input {
                    width: 100%;
                    padding: 0.8rem 1rem 0.8rem 2.8rem;
                    border-radius: 12px;
                    border: 1px solid var(--border);
                    font-family: inherit;
                    font-size: 0.95rem;
                    transition: 0.2s;
                }
                .search-wrapper input:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1); }
                
                .table-container {
                    background: white;
                    border-radius: 20px;
                    border: 1px solid var(--border);
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
                    overflow: hidden;
                }
                .modern-table { width: 100%; border-collapse: collapse; }
                .modern-table th {
                    text-align: left;
                    padding: 1.25rem 1.5rem;
                    background: #f8fafc;
                    color: #64748b;
                    font-weight: 600;
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    border-bottom: 1px solid var(--border);
                }
                .modern-table td {
                    padding: 1.25rem 1.5rem;
                    border-bottom: 1px solid #f1f5f9;
                    color: var(--secondary);
                    font-size: 0.95rem;
                }
                .modern-table tr:last-child td { border-bottom: none; }
                .modern-table tr:hover { background: #fcfcfc; }
                
                .client-info { display: flex; align-items: center; gap: 1rem; }
                .client-avatar {
                    width: 40px;
                    height: 40px;
                    background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
                    color: var(--secondary);
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 10px;
                    font-size: 0.9rem;
                }
                .client-name { font-weight: 600; display: block; color: var(--secondary); }
                .client-sub { font-size: 0.85rem; color: var(--muted); }
                
                .status-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 4px 12px;
                    border-radius: 20px;
                    font-size: 0.85rem;
                    font-weight: 600;
                }
                .status-badge.active { background: #ecfdf5; color: #059669; }
                .status-badge.pending { background: #fff7ed; color: #d97706; }
                
                .actions { display: flex; gap: 0.5rem; }
                .action-btn {
                    padding: 6px;
                    color: #94a3b8;
                    border-radius: 6px;
                    background: transparent;
                    transition: 0.2s;
                }
                .action-btn:hover { background: #f1f5f9; color: var(--secondary); }
            `}</style>
    </div>
  );
}
