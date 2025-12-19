"use client";

import { motion } from "framer-motion";
import { Users, FileText, Calendar, AlertTriangle } from "lucide-react";

const stats = [
    { label: "Total de Clientes", value: "128", icon: <Users />, color: "blue" },
    { label: "Exames no Mês", value: "45", icon: <FileText />, color: "green" },
    { label: "Agendamentos Hoje", value: "12", icon: <Calendar />, color: "purple" },
    { label: "Laudos Pendentes", value: "8", icon: <AlertTriangle />, color: "orange" },
];

export default function DashboardHome() {
    return (
        <div className="dashboard-home">
            <div className="welcome-section">
                <h1>Olá, Administrador!</h1>
                <p>Aqui está o resumo do que está acontecendo hoje.</p>
            </div>

            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="stat-card"
                    >
                        <div className={`stat-icon ${stat.color}`}>{stat.icon}</div>
                        <div className="stat-info">
                            <span className="stat-label">{stat.label}</span>
                            <span className="stat-value">{stat.value}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="dashboard-grid">
                <div className="recent-card">
                    <h3>Próximos Agendamentos</h3>
                    <div className="list-placeholder">
                        {/* Real data would go here */}
                        <p>Nenhum agendamento para as próximas horas.</p>
                    </div>
                </div>
                <div className="recent-card">
                    <h3>Laudos à Vencer</h3>
                    <div className="list-placeholder">
                        <p>3 laudos vencem nos próximos 7 dias.</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .welcome-section {
          margin-bottom: 3rem;
        }
        h1 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        .stat-card {
          background: white;
          padding: 1.5rem;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          box-shadow: var(--shadow);
          border: 1px solid var(--border);
        }
        .stat-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        .stat-icon.blue { background: #3b82f6; }
        .stat-icon.green { background: #10b981; }
        .stat-icon.purple { background: #8b5cf6; }
        .stat-icon.orange { background: #f59e0b; }
        
        .stat-info { display: flex; flex-direction: column; }
        .stat-label { font-size: 0.875rem; color: #64748b; font-weight: 500; }
        .stat-value { font-size: 1.5rem; font-weight: 700; }
        
        .dashboard-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
        }
        .recent-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: var(--shadow);
          border: 1px solid var(--border);
          min-height: 300px;
        }
        h3 { margin-bottom: 1.5rem; font-size: 1.25rem; }
        .list-placeholder {
          color: #64748b;
          text-align: center;
          padding-top: 4rem;
        }
      `}</style>
        </div>
    );
}
