# Архитектура платформы "EduHelper"

## Общее описание
EduHelper - образовательная платформа для студентов онлайн-курсов. Позволяет отслеживать прогресс, сдавать домашние задания и получать учебные материалы.

## Структура проекта (монорепозиторий)
eduhelper-platform/
├── packages/
│ ├── shared/ # Библиотека общих компонентов
│ │ ├── src/
│ │ │ ├── components/ # UI компоненты
│ │ │ │ ├── Button/
│ │ │ │ ├── Card/
│ │ │ │ ├── Modal/
│ │ │ │ ├── Table/
│ │ │ │ └── Input/
│ │ │ ├── hooks/ # React хуки
│ │ │ ├── utils/ # Утилиты
│ │ │ ├── types/ # TypeScript типы
│ │ │ └── index.ts
│ │ ├── package.json
│ │ └── tsconfig.json
│ │
│ ├── client/ # Основное React-приложение
│ │ ├── src/
│ │ │ ├── pages/ # Страницы приложения
│ │ │ │ ├── Dashboard/
│ │ │ │ ├── Courses/
│ │ │ │ ├── CourseDetail/
│ │ │ │ ├── Homework/
│ │ │ │ ├── Materials/
│ │ │ │ └── Profile/
│ │ │ ├── layouts/ # Layout компоненты
│ │ │ ├── store/ # Zustand store
│ │ │ ├── api/ # API клиент
│ │ │ ├── router/ # Роутинг
│ │ │ ├── App.tsx
│ │ │ └── main.tsx
│ │ ├── package.json
│ │ └── vite.config.ts
│ │
│ ├── server/ # Backend (Node.js + Express)
│ │ ├── src/
│ │ │ ├── controllers/ # Контроллеры
│ │ │ ├── services/ # Бизнес-логика
│ │ │ ├── models/ # Модели данных
│ │ │ ├── routes/ # API маршруты
│ │ │ ├── middleware/ # Middleware
│ │ │ ├── utils/ # Утилиты
│ │ │ └── index.ts
│ │ ├── package.json
│ │ └── tsconfig.json
│ │
│ └── telegram-bot/ # Telegram бот (опционально)
│ ├── src/
│ ├── package.json
│ └── tsconfig.json
│
├── docker-compose.yml
├── package.json # Корневой package.json (workspaces)
└── README.md


## Используемые библиотеки

### Shared (библиотека компонентов)
| Библиотека | Версия | Назначение |
|------------|--------|------------|
| react | ^18.2.0 | UI библиотека |
| typescript | ^5.0.0 | Типизация |
| @emotion/react | ^11.11.0 | CSS-in-JS стили |

### Client (фронтенд)
| Библиотека | Версия | Назначение |
|------------|--------|------------|
| @mui/material | ^5.14.0 | UI компоненты (Material Design) |
| @tanstack/react-query | ^5.0.0 | Управление серверным состоянием |
| zustand | ^4.4.0 | Управление клиентским состоянием |
| react-router-dom | ^6.20.0 | Маршрутизация |
| axios | ^1.6.0 | HTTP клиент |
| react-hook-form | ^7.48.0 | Работа с формами |
| zod | ^3.22.0 | Валидация схем |
| vite | ^5.0.0 | Сборка |

### Server (бэкенд)
| Библиотека | Версия | Назначение |
|------------|--------|------------|
| express | ^4.18.0 | Web-фреймворк |
| prisma | ^5.6.0 | ORM для работы с БД |
| postgresql | ^14.0 | База данных |
| jsonwebtoken | ^9.0.0 | JWT аутентификация |
| bcrypt | ^5.1.0 | Хеширование паролей |
| zod | ^3.22.0 | Валидация |
| winston | ^3.11.0 | Логирование |
| jest | ^29.7.0 | Тестирование |

## Разрабатываемые компоненты

### Shared библиотека
| Компонент | Назначение |
|-----------|------------|
| Button | Кнопки разных типов (primary, secondary, danger) |
| Card | Карточка для отображения курсов |
| Modal | Модальное окно |
| Table | Таблица с сортировкой и фильтрацией |
| Input | Поля ввода с валидацией |
| Select | Выпадающие списки |
| Loader | Индикатор загрузки |
| Toast | Уведомления |

### Client (React приложение)
| Компонент/Страница | Назначение |
|-------------------|------------|
| Dashboard | Главная страница с прогрессом |
| CoursesList | Список всех курсов |
| CourseDetail | Детальная информация о курсе |
| HomeworkSubmit | Форма отправки ДЗ |
| HomeworkStatus | Статус проверки работ |
| MaterialsList | Список учебных материалов |
| Profile | Личный кабинет пользователя |
| AuthGuard | Защита маршрутов |

## Структура роутинга
/
├── / # Dashboard (главная)
├── /courses # Список курсов
├── /courses/:id # Детали курса
├── /homework # Домашние задания
├── /homework/:id # Детали задания
├── /materials # Учебные материалы
├── /profile # Профиль пользователя
├── /login # Вход
├── /register # Регистрация
└── * # 404


## Технологический стек

- **Frontend:** React 18 + TypeScript + Vite
- **UI Library:** Material UI (MUI)
- **State Management:** Zustand + React Query
- **Routing:** React Router v6
- **Backend:** Node.js + Express + TypeScript
- **Database:** PostgreSQL + Prisma ORM
- **Auth:** JWT + bcrypt
- **Validation:** Zod
- **Testing:** Jest + React Testing Library
- **Linting:** ESLint (2 пробела)
- **Formatting:** Prettier

## CI/CD

- GitHub Actions для автоматического тестирования
- Docker контейнеризация
- Деплой на Vercel (frontend) и Railway (backend)
