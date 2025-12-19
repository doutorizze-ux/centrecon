"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    FileCheck,
    Calendar,
    MessageSquare,
    Settings,
    LogOut
} from "lucide-react";

const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard", href: "/dashboard" },
    { icon: <Users size={20} />, label: "Clientes", href: "/dashboard/clients" },
    { icon: <FileCheck size={20} />, label: "Exames & Laudos", href: "/dashboard/exams" },
    { icon: <Calendar size={20} />, label: "Agendamentos", href: "/dashboard/scheduling" },
    { icon: <MessageSquare size={20} />, label: "WhatsApp Chat", href: "/dashboard/whatsapp" },
    { icon: <Settings size={20} />, label: "Configurações", href: "/dashboard/settings" },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <Link href="/dashboard" className="logo">
                    <span className="logo-icon">C</span>
                    <span className="logo-text">Centrecon</span>
                </Link>
            </div>

            <nav className="sidebar-nav">
                {menuItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`nav-item ${pathname === item.href ? "active" : ""}`}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </Link>
                ))}
            </nav>

            <div className="sidebar-footer">
                <button className="nav-item logout">
                    <LogOut size={20} />
                    <span>Sair</span>
                </button>
            </div>

            <style jsx>{`
        .sidebar {
          width: 280px;
          height: 100vh;
          background: white;
          border-right: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          position: fixed;
          left: 0;
          top: 0;
          z-index: 100;
        }
        .sidebar-header {
          padding: 2rem;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--primary);
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
        }
        .sidebar-nav {
          flex: 1;
          padding: 0 1rem;
        }
        .nav-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.875rem 1rem;
          color: #64748b;
          border-radius: 10px;
          margin-bottom: 0.5rem;
          font-weight: 500;
          transition: all 0.2s;
        }
        .nav-item:hover {
          background: var(--muted);
          color: var(--primary);
        }
        .nav-item.active {
          background: var(--accent);
          color: var(--primary);
        }
        .sidebar-footer {
          padding: 1.5rem 1rem;
          border-top: 1px solid var(--border);
        }
        .logout {
          width: 100%;
          color: #ef4444;
        }
        .logout:hover {
          background: #fef2f2;
          color: #ef4444;
        }
      `}</style>
        </aside>
    );
}
