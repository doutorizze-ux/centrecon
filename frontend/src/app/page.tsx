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
      </footer>
    </main>
  );
}
