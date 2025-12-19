"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-modern">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">SST Intelligence 2025</span>
            <h1 className="hero-title">
              Eleve a Segurança da sua Empresa a um <span className="text-gradient">Novo Nível.</span>
            </h1>
            <p className="hero-subtitle">
              A única plataforma que une gestão de conformidade SST com atendimento inteligente de IA via WhatsApp. Modernidade, rigor técnico e agilidade.
            </p>

            <div className="hero-actions">
              <button className="btn btn-emerald btn-glow">
                Começar agora <ArrowRight size={18} />
              </button>
              <button className="btn btn-outline btn-video">
                <div className="play-icon"><Play size={14} fill="currentColor" /></div>
                Ver demonstração
              </button>
            </div>

            <div className="hero-features">
              <div className="h-feat-item">
                <CheckCircle2 size={18} className="feat-icon" />
                <span>100% LGPD</span>
              </div>
              <div className="h-feat-item">
                <CheckCircle2 size={18} className="feat-icon" />
                <span>Integração eSocial</span>
              </div>
              <div className="h-feat-item">
                <CheckCircle2 size={18} className="feat-icon" />
                <span>IA Integrada</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="hero-visual">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="main-card-visual"
          >
            <div className="glass-panel main-panel">
              <div className="panel-header">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
              </div>
              <div className="panel-content">
                <div className="skeleton title"></div>
                <div className="skeleton-grid">
                  <div className="skeleton block"></div>
                  <div className="skeleton block"></div>
                </div>
                <div className="skeleton line"></div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="floating-badge badge-1"
            >
              <div className="badge-icon green"></div>
              <div>
                <p className="badge-label">Exames Concluídos</p>
                <p className="badge-value">98.4%</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="floating-badge badge-2"
            >
              <div className="badge-icon blue"></div>
              <div>
                <p className="badge-label">Atendimento IA</p>
                <p className="badge-value">2.4k mens</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="hero-bg-elements">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <style jsx>{`
        .hero-modern {
          padding: 180px 0 100px;
          position: relative;
          background: #fafafa;
          overflow: hidden;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        .hero-title {
          font-size: 4.5rem;
          line-height: 1.05;
          margin-bottom: 2rem;
          color: var(--secondary);
        }
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--muted);
          margin-bottom: 3rem;
          max-width: 550px;
          font-weight: 500;
        }
        .hero-actions {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 4rem;
        }
        .btn-glow {
          box-shadow: 0 10px 30px -5px rgba(16, 185, 129, 0.5);
          padding: 1.1rem 2.5rem;
          font-size: 1.1rem;
        }
        .btn-video {
          gap: 1rem;
          padding: 1.1rem 2rem;
        }
        .play-icon {
          width: 32px;
          height: 32px;
          background: rgba(16, 185, 129, 0.1);
          color: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-features {
          display: flex;
          gap: 2rem;
        }
        .h-feat-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--secondary);
        }
        .feat-icon { color: var(--primary); }

        /* Visual Elements */
        .hero-visual { position: relative; }
        .main-card-visual {
          width: 100%;
          aspect-ratio: 1;
          position: relative;
        }
        .main-panel {
          width: 100%;
          height: 85%;
          background: white;
          border-radius: var(--radius-2xl);
          box-shadow: 0 30px 60px rgba(0,0,0,0.12);
          border: 1px solid var(--border);
          padding: 1.5rem;
          overflow: hidden;
        }
        .panel-header { display: flex; gap: 6px; margin-bottom: 2rem; }
        .dot { width: 10px; height: 10px; border-radius: 50%; opacity: 0.5; }
        .dot.red { background: #ff5f56; }
        .dot.yellow { background: #ffbd2e; }
        .dot.green { background: #27c93f; }
        
        .skeleton { background: #f1f5f9; border-radius: 10px; }
        .skeleton.title { width: 60%; height: 30px; margin-bottom: 2rem; }
        .skeleton-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem; }
        .skeleton.block { height: 120px; }
        .skeleton.line { width: 100%; height: 16px; opacity: 0.6; }

        .floating-badge {
          position: absolute;
          background: white;
          padding: 1.25rem 1.75rem;
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          gap: 1.25rem;
          box-shadow: var(--shadow-xl);
          z-index: 10;
          border: 1px solid var(--border);
        }
        .badge-1 { top: 15%; right: -5%; }
        .badge-2 { bottom: 20%; left: -10%; }
        .badge-icon { width: 45px; height: 45px; border-radius: 12px; }
        .badge-icon.green { background: var(--primary); }
        .badge-icon.blue { background: #3b82f6; }
        .badge-label { font-size: 0.85rem; color: var(--muted); font-weight: 600; margin: 0; }
        .badge-value { font-size: 1.25rem; font-weight: 800; color: var(--secondary); margin: 0; }

        .hero-bg-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
        }
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
        }
        .blob-1 {
          width: 600px;
          height: 600px;
          background: var(--primary);
          top: -200px;
          right: -100px;
        }
        .blob-2 {
          width: 400px;
          height: 400px;
          background: #3b82f6;
          bottom: -100px;
          left: -100px;
        }

        @media (max-width: 1024px) {
          .hero-container { grid-template-columns: 1fr; text-align: center; }
          .hero-title { font-size: 3.5rem; }
          .hero-subtitle { margin-left: auto; margin-right: auto; }
          .hero-actions { justify-content: center; }
          .hero-features { justify-content: center; }
          .hero-visual { margin-top: 4rem; }
        }
      `}</style>
    </section>
  );
}
