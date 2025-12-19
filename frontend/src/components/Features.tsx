"use client";

import { motion } from "framer-motion";
import { Shield, Clock, MessageSquare, BarChart, FileText, Calendar } from "lucide-react";

const features = [
    {
        icon: <Shield />,
        title: "Conformidade Total",
        description: "Gerencie ASO, PCMSO, PPRA e LTCAT de forma automatizada e segura."
    },
    {
        icon: <MessageSquare />,
        title: "Chatbot com IA",
        description: "Atendimento automático via WhatsApp para agendamentos e dúvidas frequentes."
    },
    {
        icon: <Calendar />,
        title: "Agendamento Online",
        description: "Calendário integrado para exames e visitas técnicas com lembretes automáticos."
    },
    {
        icon: <FileText />,
        title: "Gestão de Documentos",
        description: "Armazenamento seguro de laudos e certificados com alertas de renovação."
    },
    {
        icon: <BarChart />,
        title: "Relatórios Avançados",
        description: "Dashboards detalhados para acompanhar a saúde e segurança dos colaboradores."
    },
    {
        icon: <Clock />,
        title: "Economia de Tempo",
        description: "Automatize tarefas repetitivas e foque no que realmente importa: a segurança."
    }
];

export default function Features() {
    return (
        <section id="features" className="features">
            <div className="container">
                <div className="section-header">
                    <h2>Tudo o que você precisa em um só lugar</h2>
                    <p>Módulos integrados para uma gestão eficiente de segurança do trabalho.</p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="feature-card"
                        >
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style jsx>{`
        .features {
          padding: 8rem 0;
          background-color: var(--muted);
        }
        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }
        h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .section-header p {
          font-size: 1.2rem;
          color: #64748b;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
        }
        .feature-card {
          background: white;
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: var(--shadow);
          transition: all 0.3s ease;
          border: 1px solid var(--border);
        }
        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary);
        }
        .feature-icon {
          background: var(--accent);
          color: var(--primary);
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          margin-bottom: 1.5rem;
        }
        h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        p {
          color: #64748b;
          line-height: 1.6;
        }
      `}</style>
        </section>
    );
}
