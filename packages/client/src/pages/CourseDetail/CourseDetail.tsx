import React from 'react';
import { useParams, Link } from 'react-router-dom';

export const CourseDetail: React.FC = () => {
  const { id } = useParams();
  
  const lessons = [
    { id: 1, title: 'Введение в курс', duration: '15 мин', completed: true },
    { id: 2, title: 'Основы синтаксиса', duration: '45 мин', completed: true },
    { id: 3, title: 'Условные операторы', duration: '30 мин', completed: false },
    { id: 4, title: 'Циклы и итерации', duration: '40 мин', completed: false },
    { id: 5, title: 'Функции', duration: '50 мин', completed: false }
  ];

  return (
    <div>
      <h1>📖 Детали курса #{id}</h1>
      <div style={{ marginTop: '20px' }}>
        <h2>Содержание курса</h2>
        {lessons.map(lesson => (
          <div key={lesson.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', borderBottom: '1px solid #eee' }}>
            <div>
              <span style={{ fontWeight: 'bold' }}>{lesson.title}</span>
              <span style={{ marginLeft: '16px', color: '#888', fontSize: '14px' }}>{lesson.duration}</span>
            </div>
            <span style={{ color: lesson.completed ? '#4CAF50' : '#FF9800' }}>
              {lesson.completed ? '✅ Пройдено' : '⏳ В процессе'}
            </span>
          </div>
        ))}
      </div>
      <Link to="/homework" style={{ display: 'inline-block', marginTop: '20px', background: '#4CAF50', color: 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none' }}>
        📝 Перейти к домашнему заданию
      </Link>
    </div>
  );
};
