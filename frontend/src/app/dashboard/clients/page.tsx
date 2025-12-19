"use client";

import { useState } from "react";
import { Plus, Search, MoreHorizontal } from "lucide-react";

const initialClients = [
    { id: 1, name: "ConstruTech LTDA", cnpj: "12.345.678/0001-90", contact: "João Silva", email: "joao@construtech.com" },
    { id: 2, name: "Logística Express", cnpj: "98.765.432/0001-21", contact: "Maria Oliveira", email: "maria@logexpress.com.br" },
    { id: 3, name: "Indústria Metal", cnpj: "45.678.901/0001-34", contact: "Pedro Santos", email: "pedro@metal.ind.br" },
];

export default function ClientsPage() {
    const [clients] = useState(initialClients);

    return (
        <div className="clients-page">
            <div className="page-header">
                <div>
                    <h1>Gestão de Clientes</h1>
                    <p>Total de {clients.length} empresas cadastradas.</p>
                </div>
                <button className="btn btn-primary">
                    <Plus size={20} /> Novo Cliente
                </button>
            </div>

            <div className="table-container card">
                <div className="table-header">
                    <div className="search-input">
                        <Search size={18} />
                        <input type="text" placeholder="Filtrar por nome ou CNPJ..." />
                    </div>
                </div>

                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Empresa</th>
                            <th>CNPJ</th>
                            <th>Contato Responsável</th>
                            <th>E-mail</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((client) => (
                            <tr key={client.id}>
                                <td className="font-bold">{client.name}</td>
                                <td>{client.cnpj}</td>
                                <td>{client.contact}</td>
                                <td>{client.email}</td>
                                <td>
                                    <button className="btn-icon"><MoreHorizontal size={20} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <style jsx>{`
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        h1 { font-size: 1.75rem; }
        p { color: #64748b; }
        
        .table-container {
          padding: 0;
          overflow: hidden;
        }
        .table-header {
          padding: 1.5rem;
          border-bottom: 1px solid var(--border);
        }
        .search-input {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: var(--muted);
          padding: 0.6rem 1rem;
          border-radius: 10px;
          width: 300px;
          color: #64748b;
        }
        .search-input input {
          border: none;
          background: none;
          outline: none;
          width: 100%;
          font-family: inherit;
        }
        
        .data-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        .data-table th {
          padding: 1rem 1.5rem;
          font-weight: 600;
          color: #64748b;
          border-bottom: 1px solid var(--border);
          background: #f8fafc;
        }
        .data-table td {
          padding: 1rem 1.5rem;
          border-bottom: 1px solid var(--border);
        }
        .data-table tr:hover {
          background: #f1f5f9;
        }
        .font-bold { font-weight: 600; color: var(--foreground); }
        .btn-icon { color: #64748b; padding: 0.5rem; border-radius: 8px; }
        .btn-icon:hover { background: var(--muted); color: var(--primary); }
      `}</style>
        </div>
    );
}
