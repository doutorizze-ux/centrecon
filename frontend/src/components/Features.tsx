"use client";

import { motion } from "framer-motion";
import { Shield, Smartphone, Bot, Clock, FileBarChart, CalendarDays } from "lucide-react";

const items = [
  {
    icon: <Shield />,
    title: "Compliance Absoluta",
    text: "Gestão inteligente de eSocial, ASO e documentos técnicos com total rigor.",
    color: "emerald"
  },
  {
    icon: <Bot />,
    title: "IA Especialista",
    text: "Um consultor virtual 24/7 treinado nas normas vigentes para atender seus clientes.",
    color: "blue"
  },
  {
    icon: <Smartphone />,
    title: "WhatsApp First",
    text: "Todos os processos na palma da mão através de integração nativa com o Baileys.",
    color: "purple"
  },
  {
    icon: <Clock />,
    title: "Alertas Inteligentes",
    text: "Nunca mais perca um prazo. Notificações automáticas de renovação e agendamentos.",
    color: "orange"
  },
  {
    icon: <FileBarChart />,
    title: "BI & Dashboards",
    text: "Visão 360º da saúde da sua carteira com relatórios analíticos em tempo real.",
    color: "indigo"
  },
  {
    icon: <CalendarDays />,
    title: "Agendamento Sinc",
    text: "Agenda centralizada que sincroniza com atendentes e chat automaticamente.",
    color: "rose"
  }
];

export default function Features() {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="centered-header">
          <span className="section-tag">Nossa Plataforma</span>
          <h2 className="section-title">Tecnologia que <span className="text-gradient">Salva Vidas</span> e Tempo.</h2>
          <p className="section-desc">Combinamos décadas de experiência em SST com as tecnologias mais recentes do mercado.</p>
        </div>

        <div className="features-modern-grid">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="feature-modern-card"
            >
              <div className={`icon-wrapper ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .features-section {
          background: #ffffff;
        }
        .centered-header {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 6rem;
        }
        .features-modern-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }
        .feature-modern-card {
          padding: 3rem 2.5rem;
          background: #ffffff;
          border-radius: var(--radius-2xl);
          border: 1px solid var(--border);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .feature-modern-card:hover {
          transform: translateY(-12px);
          border-color: var(--primary);
          box-shadow: 0 40px 60px -15px rgba(0,0,0,0.08);
        }
        .icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
          color: white;
        }
        .icon-wrapper.emerald { background: #10b981; }
        .icon-wrapper.blue { background: #3b82f6; }
        .icon-wrapper.purple { background: #8b5cf6; }
        .icon-wrapper.orange { background: #f59e0b; }
        .icon-wrapper.indigo { background: #6366f1; }
        .icon-wrapper.rose { background: #f43f5e; }

        .card-title { font-size: 1.5rem; margin-bottom: 1rem; color: var(--secondary); font-weight: 800; }
        .card-text { color: var(--muted); line-height: 1.7; font-size: 1rem; }

        @media (max-width: 1024px) {
          .features-modern-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 640px) {
          .features-modern-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
