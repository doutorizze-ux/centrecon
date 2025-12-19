"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container nav-content">
        <Link href="/" className="logo">
          <div className="logo-box">
            <div className="logo-inner"></div>
          </div>
          <span className="logo-text">Centrecon</span>
        </Link>

        <ul className="nav-menu">
          <li><Link href="#features">Recursos</Link></li>
          <li><Link href="#about">Sobre</Link></li>
          <li><Link href="#solutions">Soluções</Link></li>
        </ul>

        <div className="nav-actions">
          <Link href="/login" className="login-link">Entrar</Link>
          <Link href="#contact" className="btn btn-emerald">Falar Especialista</Link>
        </div>
      </div>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .navbar.scrolled {
          padding: 0.8rem 0;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-weight: 800;
          font-size: 1.5rem;
          color: var(--secondary);
          text-decoration: none;
        }
        .logo-box {
          width: 38px;
          height: 38px;
          background: var(--foreground);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .logo-inner {
          width: 20px;
          height: 20px;
          background: var(--primary);
          border-radius: 4px;
          transform: rotate(45deg);
        }
        .nav-menu {
          display: flex;
          list-style: none;
          gap: 2.5rem;
        }
        .nav-menu a {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--muted);
          transition: 0.3s;
          text-decoration: none;
        }
        .nav-menu a:hover {
          color: var(--primary);
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .login-link {
          font-weight: 700;
          color: var(--foreground);
          text-decoration: none;
          font-size: 0.95rem;
        }
        @media (max-width: 968px) {
          .nav-menu { display: none; }
        }
      `}</style>
    </nav>
  );
}
