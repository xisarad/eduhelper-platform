import { Router } from 'express';

// Определяем тип для задания
interface Submission {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'approved' | 'rejected';
  feedback: string | null;
  createdAt: string;
}

const router = Router();
const submissions: Submission[] = [];

// GET /api/homework
router.get('/', (req, res) => {
  res.json(submissions);
});

// POST /api/homework
router.post('/', (req, res) => {
  const { title, description } = req.body;
  
  if (!title || !description) {
    res.status(400).json({ error: 'Title and description required' });
    return;
  }
  
  const newSubmission: Submission = {
    id: Date.now().toString(),
    title,
    description,
    status: 'pending',
    feedback: null,
    createdAt: new Date().toISOString()
  };
  
  submissions.push(newSubmission);
  res.status(201).json(newSubmission);
});

export default router;