import React, { useState, useEffect } from 'react';
import { getSubmissions, submitHomework, HomeworkSubmission } from '../../api/homeworkApi';

export const Homework: React.FC = () => {
  const [submissions, setSubmissions] = useState<HomeworkSubmission[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = async () => {
    const data = await getSubmissions();
    setSubmissions(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitHomework({ title, description });
      setTitle('');
      setDescription('');
      await loadSubmissions();
      alert('✅ Задание отправлено на проверку!');
    } catch (error) {
      alert('❌ Ошибка при отправке');
    } finally {
      setLoading(false);
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
    case 'pending': return '⏳ На проверке';
    case 'approved': return '✅ Одобрено';
    case 'rejected': return '❌ Требует доработки';
    default: return status;
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1>📚 Домашние задания</h1>
      
      <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
        <h2>➕ Отправить задание</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Название:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Название задания"
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Описание:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={4}
              placeholder="Описание решения"
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            style={{
              background: '#4CAF50',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {loading ? 'Отправка...' : '📤 Отправить на проверку'}
          </button>
        </form>
      </div>
      
      <div>
        <h2>📋 Мои задания</h2>
        {submissions.length === 0 ? (
          <p>У вас пока нет отправленных заданий</p>
        ) : (
          submissions.map((sub) => (
            <div key={sub.id} style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '10px', borderRadius: '8px' }}>
              <h3>{sub.title}</h3>
              <p>{sub.description}</p>
              <p><strong>Статус:</strong> {getStatusText(sub.status)}</p>
              {sub.feedback && <p><strong>Комментарий:</strong> {sub.feedback}</p>}
              <small>Отправлено: {new Date(sub.createdAt).toLocaleString()}</small>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
