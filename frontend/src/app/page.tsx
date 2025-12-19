"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="landing-page">
      <Navbar />
      <Hero />
      <Features />

      {/* CTA Section */}
      <section className="cta-wrapper">
        <div className="container">
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="cta-new-design"
          >
            <div className="cta-info">
              <h2>Mude a forma como você faz <span className="text-secondary">SST hoje.</span></h2>
              <p>Simples, seguro e totalmente automatizado. A evolução da segurança do trabalho chegou.</p>
              <div className="cta-btns">
                <button className="btn btn-emerald">Solicitar Proposta</button>
                <button className="btn btn-outline-white">Agendar Demo</button>
              </div>
            </div>
            <div className="cta-decoration">
              <div className="deco-circle deco-1"></div>
              <div className="deco-circle deco-2"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="modern-footer">
        <div className="container">
          <div className="footer-top">
            <div className="f-col main-f">
              <div className="logo-f">
                <div className="logo-box-f"><div className="logo-inner"></div></div>
                <span>Centrecon</span>
              </div>
              <p className="f-desc">Líder em inovação para segurança e medicina do trabalho no Brasil.</p>
              <div className="social-links">
                <a href="#"><Linkedin size={20} /></a>
                <a href="#"><Instagram size={20} /></a>
                <a href="#"><Twitter size={20} /></a>
              </div>
            </div>

            <div className="f-col">
              <h4>Plataforma</h4>
              <a href="#">Funcionalidades</a>
              <a href="#">Chatbot IA</a>
              <a href="#">Segurança</a>
              <a href="#">eSocial</a>
            </div>

            <div className="f-col">
              <h4>Empresa</h4>
              <a href="#">Sobre nós</a>
              <a href="#">Carreiras</a>
              <a href="#">Blog</a>
              <a href="#">Contato</a>
            </div>

            <div className="f-col contact-f">
              <h4>Contato</h4>
              <div className="contact-item"><Mail size={16} /> <span>contato@centrecon.com.br</span></div>
              <div className="contact-item"><Phone size={16} /> <span>+55 (11) 99999-9999</span></div>
              <div className="contact-item"><MapPin size={16} /> <span>São Paulo/SP, Brasil</span></div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 Centrecon. Todos os direitos reservados. Orgulhosamente desenvolvido no Brasil.</p>
            <div className="legal-links">
              <a href="#">Privacidade</a>
              <a href="#">Termos</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .landing-page { overflow-x: hidden; }
        
        .cta-wrapper { padding: 80px 0; background: #fff; }
        .cta-new-design {
          background: var(--foreground);
          border-radius: var(--radius-2xl);
          padding: 6rem;
          color: white;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
        }
        .cta-info { position: relative; z-index: 5; max-width: 650px; }
        .cta-new-design h2 { font-size: 3.5rem; line-height: 1.1; margin-bottom: 1.5rem; font-weight: 800; color: white; }
        .cta-new-design p { font-size: 1.25rem; color: #94a3b8; margin-bottom: 2.5rem; }
        .text-secondary { color: var(--primary); }
        .cta-btns { display: flex; gap: 1.5rem; }
        .btn-outline-white { border: 1px solid #334155; color: white; }
        .btn-outline-white:hover { background: #1e293b; border-color: #475569; }

        .cta-decoration { position: absolute; top: 0; right: 0; width: 100%; height: 100%; pointer-events: none; }
        .deco-circle { position: absolute; border-radius: 50%; border: 1px solid rgba(255,255,255,0.05); }
        .deco-1 { width: 400px; height: 400px; top: -100px; right: -50px; background: radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%); }
        .deco-2 { width: 600px; height: 600px; bottom: -200px; right: -150px; border: 1px solid rgba(16,185,129,0.05); }

        .modern-footer { background: #020617; color: #94a3b8; padding: 100px 0 40px; }
        .footer-top { display: grid; grid-template-columns: 1.5fr 1fr 1fr 1.2fr; gap: 4rem; padding-bottom: 60px; border-bottom: 1px solid #1e293b; }
        .logo-f { display: flex; align-items: center; gap: 1rem; color: white; font-weight: 800; font-size: 1.5rem; margin-bottom: 1.5rem; }
        .logo-box-f { width: 32px; height: 32px; background: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; }
        .logo-inner { width: 16px; height: 16px; background: var(--primary); transform: rotate(45deg); border-radius: 2px; }
        .f-desc { margin-bottom: 2rem; max-width: 250px; line-height: 1.6; }
        .social-links { display: flex; gap: 1rem; }
        .social-links a { width: 40px; height: 40px; border-radius: 10px; background: #0f172a; display: flex; align-items: center; justify-content: center; color: white; transition: 0.3s; border: 1px solid #1e293b; }
        .social-links a:hover { border-color: var(--primary); color: var(--primary); }

        .f-col h4 { color: white; font-size: 1.1rem; margin-bottom: 2rem; font-weight: 700; }
        .f-col a { display: block; color: #94a3b8; text-decoration: none; margin-bottom: 1rem; transition: 0.3s; font-size: 0.95rem; }
        .f-col a:hover { color: white; transform: translateX(5px); }
        
        .contact-f .contact-item { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem; font-size: 0.95rem; }
        
        .footer-bottom { padding: 40px 0 0; display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; }
        .legal-links { display: flex; gap: 2rem; }
        .legal-links a { color: #64748b; text-decoration: none; transition: 0.3s; }
        .legal-links a:hover { color: white; }

        @media (max-width: 1024px) {
          .footer-top { grid-template-columns: 1fr 1fr; gap: 3rem; }
          .cta-new-design { padding: 4rem; }
          .cta-new-design h2 { font-size: 2.5rem; }
        }
        @media (max-width: 640px) {
          .footer-top { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; gap: 2rem; text-align: center; }
        }
      `}</style>
    </main>
  );
}
