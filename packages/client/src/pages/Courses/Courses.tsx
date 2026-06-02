import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Course {
  id: number;
  title: string;
  description: string;
  progress: number;
  teacher: string;
}

export const Courses: React.FC = () => {
  const [courses] = useState<Course[]>([
    { id: 1, title: 'JavaScript с нуля до профи', description: 'Изучение современного JavaScript, включая ES6+, асинхронность и работу с API', progress: 75, teacher: 'Максим Исанькин' },
    { id: 2, title: 'React: разработка SPA', description: 'React hooks, контекст, маршрутизация и управление состоянием', progress: 45, teacher: 'Дмитрий Соколов' },
    { id: 3, title: 'TypeScript: надёжная типизация', description: 'Практический курс по TypeScript для JavaScript разработчиков', progress: 90, teacher: 'Елена Петрова' },
    { id: 4, title: 'Node.js: бэкенд на JavaScript', description: 'Создание серверных приложений, работа с базами данных и REST API', progress: 30, teacher: 'Михаил Козлов' }
  ]);

  return (
    <div>
      <h1>📚 Мои курсы</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
        {courses.map(course => (
          <Link to={`/courses/${course.id}`} key={course.id} style={{ textDecoration: 'none' }}>
            <div style={{ border: '1px solid #e0e0e0', borderRadius: '12px', padding: '20px', cursor: 'pointer', transition: 'box-shadow 0.2s' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{course.title}</h3>
              <p style={{ margin: '0 0 10px 0', color: '#666' }}>{course.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                <span style={{ color: '#888', fontSize: '14px' }}>Преподаватель: {course.teacher}</span>
                <span style={{ background: '#4CAF50', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '14px' }}>Прогресс: {course.progress}%</span>
              </div>
              <div style={{ background: '#f0f0f0', borderRadius: '10px', height: '8px', marginTop: '12px', overflow: 'hidden' }}>
                <div style={{ background: '#4CAF50', width: `${course.progress}%`, height: '100%' }} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
