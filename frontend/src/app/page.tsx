import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />

      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Pronto para modernizar sua gestão?</h2>
            <p>Junte-se a centenas de empresas que já utilizam o Centrecon.</p>
            <button className="btn btn-primary btn-lg">Falar com um Especialista</button>
          </div>
        </div>
        <style jsx>{`
          .cta {
            padding: 8rem 0;
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            color: white;
            text-align: center;
          }
          .cta-content {
            max-width: 700px;
            margin: 0 auto;
          }
          h2 {
            font-size: 3rem;
            margin-bottom: 1.5rem;
            color: white;
          }
          p {
            font-size: 1.25rem;
            margin-bottom: 3rem;
            opacity: 0.9;
          }
          .btn-primary {
            background: white;
            color: var(--primary);
          }
          .btn-primary:hover {
            background: #f8fafc;
            color: var(--primary-hover);
          }
        `}</style>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-info">
              <div className="logo white">
                <span className="logo-icon">C</span>
                <span className="logo-text">Centrecon</span>
              </div>
              <p>Excelência em Segurança e Medicina do Trabalho.</p>
            </div>
            <div className="footer-links">
              <h4>Links Rápidos</h4>
              <a href="#">Início</a>
              <a href="#features">Recursos</a>
              <a href="#">Suporte</a>
            </div>
            <div className="footer-contact">
              <h4>Contato</h4>
              <p>contato@centrecon.com.br</p>
              <p>+55 (11) 99999-9999</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Centrecon. Todos os direitos reservados.</p>
          </div>
        </div>
        <style jsx>{`
          .footer {
            padding: 5rem 0 2rem;
            background: var(--foreground);
            color: #94a3b8;
          }
          .footer-grid {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            gap: 4rem;
            margin-bottom: 4rem;
          }
          .logo.white {
            color: white;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-weight: 800;
            font-size: 1.5rem;
          }
          .logo-icon {
            background: var(--primary);
            color: white;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            font-size: 1rem;
          }
          h4 {
            color: white;
            margin-bottom: 1.5rem;
          }
          .footer-links a, .footer-contact p {
            display: block;
            margin-bottom: 0.75rem;
            color: #94a3b8;
          }
          .footer-bottom {
            border-top: 1px solid #334155;
            padding-top: 2rem;
            text-align: center;
            font-size: 0.875rem;
          }
          @media (max-width: 768px) {
            .footer-grid {
              grid-template-columns: 1fr;
              gap: 2rem;
            }
          }
        `}</style>
      </footer>
    </main>
  );
}
