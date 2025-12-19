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
    </div>
  );
}
