import React, { useState } from 'react';

export const Profile: React.FC = () => {
  const [user] = useState({
    name: 'Студент №10',
    email: 'student10@eduhelper.ru',
    group: 'КНИТУ-КАИ',
    course: '3 курс',
    avatar: '🎓'
  });

  return (
    <div>
      <h1>👤 Личный кабинет</h1>
      <div style={{ background: '#f5f5f5', padding: '24px', borderRadius: '16px', marginTop: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ fontSize: '64px' }}>{user.avatar}</div>
          <div>
            <h2 style={{ margin: '0 0 8px 0' }}>{user.name}</h2>
            <p style={{ margin: '4px 0', color: '#666' }}>📧 {user.email}</p>
            <p style={{ margin: '4px 0', color: '#666' }}>🏫 {user.group}</p>
            <p style={{ margin: '4px 0', color: '#666' }}>📚 {user.course}</p>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '20px', padding: '20px', background: '#fff3e0', borderRadius: '12px' }}>
        <h3>📊 Статистика обучения</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>✅ Выполнено заданий: 5</li>
          <li>⏳ На проверке: 2</li>
          <li>⭐ Средний балл: 85%</li>
          <li>📚 Изучено курсов: 3</li>
        </ul>
      </div>
    </div>
  );
};
