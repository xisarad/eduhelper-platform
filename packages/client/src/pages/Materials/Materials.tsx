import React from 'react';

const materials = [
  { id: 1, title: 'JavaScript: The Good Parts', type: 'Книга', url: 'https://github.com/getify/You-Dont-Know-JS' },
  { id: 2, title: 'React Official Documentation', type: 'Документация', url: 'https://react.dev/' },
  { id: 3, title: 'TypeScript Handbook', type: 'Руководство', url: 'https://www.typescriptlang.org/docs/' },
  { id: 4, title: 'Node.js Best Practices', type: 'Статья', url: 'https://github.com/goldbergyoni/nodebestpractices' }
];

export const Materials: React.FC = () => {
  return (
    <div>
      <h1>📖 Учебные материалы</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {materials.map(material => (
          <a key={material.id} href={material.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div style={{ border: '1px solid #e0e0e0', borderRadius: '12px', padding: '20px', transition: 'box-shadow 0.2s' }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{material.title}</h3>
              <span style={{ background: '#f0f0f0', padding: '4px 12px', borderRadius: '20px', fontSize: '12px' }}>{material.type}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
