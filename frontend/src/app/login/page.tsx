"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Login with:", email, password);
        // Redirect to dashboard logic here
    };

    return (
        <div className="login-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="login-card"
            >
                <Link href="/" className="login-logo">
                    <span className="logo-icon">C</span>
                    <span className="logo-text">Centrecon</span>
                </Link>
                <h1>Bem-vindo de volta</h1>
                <p>Acesse sua conta para gerenciar sua segurança.</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="exemplo@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-options">
                        <label className="checkbox-label">
                            <input type="checkbox" /> Lembrar de mim
                        </label>
                        <a href="#" className="forgot-password">Esqueceu a senha?</a>
                    </div>
                    <button type="submit" className="btn btn-primary btn-full">Entrar</button>
                </form>

                <p className="signup-text">
                    Não tem uma conta? <a href="#">Entre em contato</a>
                </p>
            </motion.div>
            <style jsx>{`
        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--muted);
          padding: 2rem;
        }
        .login-card {
          background: white;
          padding: 3rem;
          border-radius: 20px;
          box-shadow: var(--shadow-lg);
          width: 100%;
          max-width: 480px;
          text-align: center;
        }
        .login-logo {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
          font-weight: 800;
          font-size: 1.5rem;
          color: var(--primary);
        }
        h1 {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
        }
        p {
          color: #64748b;
          margin-bottom: 2.5rem;
        }
        .form-group {
          text-align: left;
          margin-bottom: 1.5rem;
        }
        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          font-size: 0.875rem;
        }
        input[type="email"], input[type="password"] {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 10px;
          border: 1px solid var(--border);
          font-family: inherit;
          font-size: 1rem;
          transition: border-color 0.2s;
        }
        input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px var(--accent);
        }
        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          font-size: 0.875rem;
        }
        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }
        .forgot-password {
          color: var(--primary);
          font-weight: 600;
        }
        .btn-full {
          width: 100%;
          padding: 1rem;
          font-size: 1.1rem;
        }
        .signup-text {
          margin-top: 2.5rem;
          margin-bottom: 0;
        }
        .signup-text a {
          color: var(--primary);
          font-weight: 600;
        }
      `}</style>
        </div>
    );
}
