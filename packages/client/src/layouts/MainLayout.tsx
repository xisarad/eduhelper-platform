import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export const MainLayout: React.FC = () => {
  return (
    <div>
      <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
        <Link to="/">Dashboard</Link> |{' '}
        <Link to="/courses">Courses</Link> |{' '}
        <Link to="/homework">Homework</Link> |{' '}
        <Link to="/materials">Materials</Link> |{' '}
        <Link to="/profile">Profile</Link>
      </nav>
      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
    </div>
  );
};