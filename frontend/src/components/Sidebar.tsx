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
  LogOut,
  ChevronRight
} from "lucide-react";

const menuItems = [
  { icon: <LayoutDashboard size={20} />, label: "Visão Geral", href: "/dashboard" },
  { icon: <Users size={20} />, label: "Clientes", href: "/dashboard/clients" },
  { icon: <FileCheck size={20} />, label: "Exames & Laudos", href: "/dashboard/exams" },
  { icon: <Calendar size={20} />, label: "Agenda Inteligente", href: "/dashboard/scheduling" },
  { icon: <MessageSquare size={20} />, label: "WhatsApp Chat", href: "/dashboard/whatsapp" },
  { icon: <Settings size={20} />, label: "Configurações", href: "/dashboard/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar-premium">
      <div className="sidebar-header">
        <div className="logo-box">
          <div className="logo-inner"></div>
        </div>
        <span className="logo-text">Centrecon</span>
      </div>

      <div className="sidebar-section-label">MENU PRINCIPAL</div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-item ${isActive ? "active" : ""}`}
            >
              <div className="nav-icon">{item.icon}</div>
              <span className="nav-label">{item.label}</span>
              {isActive && <ChevronRight size={16} className="nav-arrow" />}
            </Link>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <div className="user-mini-profile">
          <div className="avatar-mini">AD</div>
          <div className="user-details">
            <span className="name">Admin</span>
            <span className="role">Online</span>
          </div>
        </div>
        <button className="logout-btn">
          <LogOut size={18} />
        </button>
      </div>

      <style jsx>{`
        .sidebar-premium {
          width: 280px;
          height: 100vh;
          background: #0f172a; /* Deep Slate */
          display: flex;
          flex-direction: column;
          position: fixed;
          left: 0;
          top: 0;
          z-index: 100;
          border-right: 1px solid #1e293b;
        }
        .sidebar-header {
          padding: 2rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .logo-box {
          width: 36px;
          height: 36px;
          background: white;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo-inner {
          width: 18px;
          height: 18px;
          background: var(--primary);
          border-radius: 4px;
          transform: rotate(45deg);
        }
        .logo-text {
          color: white;
          font-weight: 700;
          font-size: 1.25rem;
          font-family: 'Outfit', sans-serif;
        }
        .sidebar-section-label {
          padding: 0 2rem;
          font-size: 0.7rem;
          font-weight: 700;
          color: #475569;
          margin-bottom: 1rem;
          letter-spacing: 0.05em;
        }
        .sidebar-nav {
          flex: 1;
          padding: 0 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .nav-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          color: #94a3b8;
          border-radius: 12px;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          font-size: 0.95rem;
        }
        .nav-item:hover {
          color: white;
          background: rgba(255, 255, 255, 0.05);
        }
        .nav-item.active {
          background: linear-gradient(90deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.05) 100%);
          color: var(--primary);
          font-weight: 600;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }
        .nav-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nav-arrow {
          margin-left: auto;
          opacity: 0.5;
        }
        
        .sidebar-footer {
          padding: 1.5rem;
          border-top: 1px solid #1e293b;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .user-mini-profile {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .avatar-mini {
          width: 36px;
          height: 36px;
          background: var(--primary);
          color: white;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
        }
        .user-details {
          display: flex;
          flex-direction: column;
        }
        .name { color: white; font-size: 0.9rem; font-weight: 600; }
        .role { color: var(--primary); font-size: 0.75rem; }
        
        .logout-btn {
          color: #64748b;
          padding: 0.5rem;
          border-radius: 8px;
          transition: 0.2s;
        }
        .logout-btn:hover {
          background: #ef4444;
          color: white;
        }
      `}</style>
    </aside>
  );
}
