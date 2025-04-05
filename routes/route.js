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

// Route to update an exam
router.put('/exams/:id', (req, res) => {
  const examId = parseInt(req.params.id);
  const updatedData = req.body;

  let exam = exams.find(e => e.id === examId);
  if (exam) {
    exam.name = updatedData.name || exam.name;
    exam.date = updatedData.date || exam.date;
    res.json(exam);
  } else {
    res.status(404).json({ error: 'Exam not found' });
  }
});

// Villarta - Route to create a new exam
router.post('/exams', (req, res) => {
  const newExam = req.body;
  newExam.id = exams.length + 1; 
  exams.push(newExam);
  res.status(201).json(newExam);
});


