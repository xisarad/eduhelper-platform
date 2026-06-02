import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export const MainLayout: React.FC = () => {
  return (
    <div>
      <nav style={{ padding: '1rem', background: '#2c3e50', color: 'white', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>🏠 Главная</Link>
        <Link to="/courses" style={{ color: 'white', textDecoration: 'none' }}>📚 Курсы</Link>
        <Link to="/homework" style={{ color: 'white', textDecoration: 'none' }}>📝 ДЗ</Link>
        <Link to="/materials" style={{ color: 'white', textDecoration: 'none' }}>📖 Материалы</Link>
        <Link to="/profile" style={{ color: 'white', textDecoration: 'none' }}>👤 Профиль</Link>
      </nav>
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  );
};
