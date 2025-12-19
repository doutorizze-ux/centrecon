"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="container nav-content">
                <Link href="/" className="logo">
                    <span className="logo-icon">C</span>
                    <span className="logo-text">Centrecon</span>
                </Link>
                <div className="nav-links">
                    <Link href="#features">Recursos</Link>
                    <Link href="#about">Sobre</Link>
                    <Link href="#contact">Contato</Link>
                    <Link href="/login" className="btn btn-primary">Entrar</Link>
                </div>
            </div>
            <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s ease;
          padding: 1.5rem 0;
          background: rgba(255, 255, 255, 0);
        }
        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          padding: 1rem 0;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 800;
          font-size: 1.5rem;
          color: var(--primary);
        }
        .logo-icon {
          background: var(--primary);
          color: white;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .nav-links a {
          font-weight: 500;
          color: var(--foreground);
          transition: color 0.2s;
        }
        .nav-links a:hover {
          color: var(--primary);
        }
      `}</style>
        </nav>
    );
}
