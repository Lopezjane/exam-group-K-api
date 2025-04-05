route.js
import { Router } from 'express';

export const router = Router();

let exams = [
  { id: 1, name: 'Math Exam', date: '2025-04-05' },
  { id: 2, name: 'Science Exam', date: '2025-04-05' }
];

//laygan
// Route to get a message
router.get('/exam-group', (req, res) => 
  res.json({ message: "Group K API" })
);

// Route to get exams
router.get('/exams', (req, res) => 
  res.json(exams)
);

