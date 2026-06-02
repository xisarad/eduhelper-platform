import React from 'react';

export const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>📊 Панель управления</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
        <div style={{ background: '#f0f8ff', padding: '20px', borderRadius: '12px' }}>
          <h3>📚 Активные курсы</h3>
          <p style={{ fontSize: '32px', fontWeight: 'bold' }}>3</p>
          <p>курса в процессе изучения</p>
        </div>
        <div style={{ background: '#f0fff0', padding: '20px', borderRadius: '12px' }}>
          <h3>✅ Выполненные задания</h3>
          <p style={{ fontSize: '32px', fontWeight: 'bold' }}>5</p>
          <p>заданий сдано на проверку</p>
        </div>
        <div style={{ background: '#fff8f0', padding: '20px', borderRadius: '12px' }}>
          <h3>⭐ Средний балл</h3>
          <p style={{ fontSize: '32px', fontWeight: 'bold' }}>85%</p>
          <p>успеваемость</p>
        </div>
      </div>
    </div>
  );
};
