# Архитектура платформы "EduHelper"

## Общее описание
EduHelper - образовательная платформа для студентов онлайн-курсов. Позволяет отслеживать прогресс, сдавать домашние задания и получать учебные материалы.

## Структура проекта (монорепозиторий)
eduhelper-platform/
├── packages/
│ ├── shared/ # Библиотека общих компонентов
│ │ ├── src/
│ │ │ ├── components/ # UI компоненты
│ │ │ ├── hooks/ # React хуки
│ │ │ └── index.ts
│ │ └── package.json
│ ├── client/ # React-приложение
│ │ ├── src/
│ │ │ ├── pages/ # Страницы
│ │ │ ├── router/ # Роутинг
│ │ │ └── App.tsx
│ │ └── package.json
│ └── server/ # Backend
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ └── routes/
│ └── package.json
└── docker-compose.yml

## Используемые библиотеки

### Frontend
- React 18 + TypeScript
- Vite - сборка
- Material UI - компоненты
- React Query - состояние
- React Router - маршрутизация

### Backend
- Node.js + Express
- Prisma ORM
- PostgreSQL
- JWT для аутентификации

## Структура роутинга
/ # Dashboard
/courses # Список курсов
/courses/:id # Детали курса
/homework # ДЗ
/homework/:id # Детали ДЗ
/materials # Материалы
/profile # Профиль
/login # Вход
/register # Регистрация


## CI/CD
- GitHub Actions
- Docker контейнеризация
- Деплой: Vercel (frontend), Railway (backend)
