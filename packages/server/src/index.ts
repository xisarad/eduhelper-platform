import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import homeworkRoutes from './routes/homeworkRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Расширенные настройки CORS
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'x-user-id']
}));

// Добавляем CSP заголовок для DevTools
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', 'default-src \'self\'; connect-src \'self\' http://localhost:3000');
  next();
});

app.use(express.json());

// Корневой путь
app.get('/', (req, res) => {
  res.json({ 
    message: 'EduHelper API Server',
    endpoints: {
      health: 'GET /health',
      homework: 'GET /api/homework',
      submitHomework: 'POST /api/homework'
    }
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API routes
app.use('/api/homework', homeworkRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
