import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <main className="dashboard-main">
                <header className="dashboard-header">
                    <div className="search-bar">
                        <input type="text" placeholder="Buscar clientes ou exames..." />
                    </div>
                    <div className="user-profile">
                        <div className="user-info">
                            <span className="user-name">Administrador</span>
                            <span className="user-role">Admin</span>
                        </div>
                        <div className="user-avatar">AD</div>
                    </div>
                </header>
                <div className="dashboard-content">
                    {children}
                </div>
            </main>
            <style jsx global>{`
        .dashboard-container {
          display: flex;
          min-height: 100vh;
          background: #f8fafc;
        }
        .dashboard-main {
          flex: 1;
          margin-left: 280px;
          display: flex;
          flex-direction: column;
        }
        .dashboard-header {
          height: 80px;
          background: white;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 3rem;
          position: sticky;
          top: 0;
          z-index: 90;
        }
        .search-bar input {
          padding: 0.6rem 1.2rem;
          border-radius: 20px;
          border: 1px solid var(--border);
          width: 350px;
          background: var(--muted);
          font-family: inherit;
        }
        .user-profile {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .user-info {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          line-height: 1.2;
        }
        .user-name {
          font-weight: 600;
          font-size: 0.95rem;
        }
        .user-role {
          font-size: 0.75rem;
          color: #64748b;
        }
        .user-avatar {
          width: 40px;
          height: 40px;
          background: var(--primary);
          color: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }
        .dashboard-content {
          padding: 3rem;
        }
      `}</style>
        </div>
    );
}
