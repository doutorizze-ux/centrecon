"use client";

import { motion } from "framer-motion";
import { Users, FileText, Calendar, AlertCircle, ArrowUpRight, TrendingUp } from "lucide-react";

const stats = [
  { label: "Clientes Ativos", value: "142", change: "+12%", icon: <Users size={22} />, color: "emerald" },
  { label: "Exames Mês", value: "856", change: "+5.3%", icon: <FileText size={22} />, color: "blue" },
  { label: "Agendamentos", value: "28", change: "Hoje", icon: <Calendar size={22} />, color: "purple" },
  { label: "Pendências", value: "12", change: "Ação req.", icon: <AlertCircle size={22} />, color: "orange" },
];

export default function Dashboard() {
  return (
    <div className="dash-home">
      <div className="dash-header-section">
        <div>
          <h1 className="dash-title">Visão Geral</h1>
          <p className="dash-subtitle">Bem-vindo de volta ao Centrecon Intelligent System.</p>
        </div>
        <button className="btn btn-emerald btn-sm">
          <ArrowUpRight size={18} /> Novo Agendamento
        </button>
      </div>

      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="stat-card"
          >
            <div className="stat-top">
              <div className={`stat-icon ${stat.color}`}>{stat.icon}</div>
              <span className={`stat-change ${stat.color}`}>{stat.change}</span>
            </div>
            <h3 className="stat-value">{stat.value}</h3>
            <p className="stat-label">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="dash-content-grid">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="dash-card main-chart-card"
        >
          <div className="card-header">
            <h3>Fluxo de Atendimentos</h3>
            <button className="btn-icon">
              <TrendingUp size={18} />
            </button>
          </div>
          <div className="chart-placeholder">
            <div className="bar b1"></div>
            <div className="bar b2"></div>
            <div className="bar b3"></div>
            <div className="bar b4"></div>
            <div className="bar b5"></div>
            <div className="bar b6"></div>
            <div className="bar b7"></div>
          </div>
        </motion.div>

        <div className="side-cards">
          <div className="dash-card recent-activity">
            <div className="card-header">
              <h3>Notificações Recentes</h3>
            </div>
            <div className="activity-list">
              <div className="act-item">
                <div className="dot blue"></div>
                <div>
                  <p className="act-text">ASO de <strong>João Silva</strong> emitido.</p>
                  <span className="act-time">2 min atrás</span>
                </div>
              </div>
              <div className="act-item">
                <div className="dot green"></div>
                <div>
                  <p className="act-text">Novo cliente <strong>Metalúrgica ABC</strong>.</p>
                  <span className="act-time">1 hora atrás</span>
                </div>
              </div>
              <div className="act-item">
                <div className="dot orange"></div>
                <div>
                  <p className="act-text">3 exames vencendo amanhã.</p>
                  <span className="act-time">5 horas atrás</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dash-home { padding: 0.5rem; }
        .dash-header-section {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 2.5rem;
        }
        .dash-title { font-size: 2rem; color: var(--secondary); margin-bottom: 0.5rem; }
        .dash-subtitle { color: var(--muted); }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }
        .stat-card {
          background: white;
          padding: 1.5rem;
          border-radius: 20px;
          border: 1px solid var(--border);
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
          transition: 0.3s;
        }
        .stat-card:hover { transform: translateY(-3px); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
        .stat-top { display: flex; justify-content: space-between; margin-bottom: 1rem; }
        .stat-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        .stat-icon.emerald { background: #10b981; }
        .stat-icon.blue { background: #3b82f6; }
        .stat-icon.purple { background: #8b5cf6; }
        .stat-icon.orange { background: #f59e0b; }
        
        .stat-change { font-size: 0.8rem; font-weight: 700; padding: 0.25rem 0.75rem; border-radius: 20px; display: flex; align-items: center; height: fit-content; }
        .stat-change.emerald { background: #ecfdf5; color: #059669; }
        .stat-change.blue { background: #eff6ff; color: #2563eb; }
        .stat-change.purple { background: #f5f3ff; color: #7c3aed; }
        .stat-change.orange { background: #fff7ed; color: #d97706; }
        
        .stat-value { font-size: 2rem; font-weight: 800; color: var(--secondary); line-height: 1; margin-bottom: 0.25rem; }
        .stat-label { color: var(--muted); font-size: 0.9rem; }

        .dash-content-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 1.5rem;
        }
        .dash-card {
           background: white;
           border-radius: 20px;
           border: 1px solid var(--border);
           padding: 1.5rem;
        }
        .card-header {
           display: flex;
           justify-content: space-between;
           align-items: center;
           margin-bottom: 1.5rem;
        }
        .card-header h3 { font-size: 1.1rem; color: var(--secondary); }
        .btn-icon { width: 32px; height: 32px; border-radius: 8px; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; color: var(--muted); cursor: pointer; }

        .chart-placeholder {
           height: 200px;
           display: flex;
           align-items: flex-end;
           justify-content: space-between;
           padding-top: 2rem;
        }
        .bar { width: 10%; background: #f1f5f9; border-radius: 8px; }
        .b1 { height: 40%; }
        .b2 { height: 70%; background: #a7f3d0; }
        .b3 { height: 50%; }
        .b4 { height: 90%; background: #10b981; }
        .b5 { height: 60%; }
        .b6 { height: 75%; background: #34d399; }
        .b7 { height: 45%; }
        
        .activity-list { display: flex; flex-direction: column; gap: 1.5rem; }
        .act-item { display: flex; gap: 1rem; align-items: flex-start; }
        .dot { width: 10px; height: 10px; border-radius: 50%; margin-top: 6px; flex-shrink: 0; }
        .dot.blue { background: #3b82f6; }
        .dot.green { background: #10b981; }
        .dot.orange { background: #f59e0b; }
        .act-text { font-size: 0.9rem; color: var(--secondary); margin-bottom: 0.2rem; }
        .act-time { font-size: 0.75rem; color: var(--muted); }
      `}</style>
    </div>
  );
}
