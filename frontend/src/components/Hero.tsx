"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="hero">
            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-text"
                >
                    <h1>Segurança do Trabalho <span className="text-gradient">Inteligente</span></h1>
                    <p>
                        Plataforma completa para gestão de exames, laudos e conformidade.
                        Integrado com IA e WhatsApp para automatizar seu atendimento.
                    </p>
                    <div className="hero-actions">
                        <button className="btn btn-primary btn-lg">Começar Agora</button>
                        <button className="btn btn-outline btn-lg">Saber Mais</button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hero-image"
                >
                    <div className="floating-card">
                        <div className="card-status">Conformidade: 98%</div>
                        <div className="card-graph"></div>
                    </div>
                    <div className="main-image-placeholder">
                        {/* Imagine a premium dashboard screenshot here */}
                    </div>
                </motion.div>
            </div>
            <style jsx>{`
        .hero {
          padding: 10rem 0 6rem;
          background: radial-gradient(circle at top right, var(--accent) 0%, transparent 40%);
        }
        .hero-content {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        h1 {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }
        .text-gradient {
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          font-size: 1.25rem;
          color: #64748b;
          margin-bottom: 2.5rem;
          max-width: 500px;
        }
        .hero-actions {
          display: flex;
          gap: 1.5rem;
        }
        .btn-lg {
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
        }
        .btn-outline {
          border: 2px solid var(--primary);
          color: var(--primary);
        }
        .hero-image {
          position: relative;
        }
        .main-image-placeholder {
          width: 100%;
          aspect-ratio: 4/3;
          background: white;
          border-radius: 20px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
          border: 1px solid var(--border);
        }
        .floating-card {
          position: absolute;
          top: -20px;
          right: -20px;
          background: white;
          padding: 1.5rem;
          border-radius: 15px;
          box-shadow: var(--shadow-lg);
          z-index: 10;
          border-left: 4px solid var(--primary);
        }
        @media (max-width: 968px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-text {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          h1 { font-size: 3rem; }
          .hero-actions { justify-content: center; }
        }
      `}</style>
        </section>
    );
}
