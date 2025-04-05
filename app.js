import express from 'express';
import bodyParser from 'body-parser';
import { router } from './routes/route.js';

const app = express();

app.use(bodyParser.json()); // Ensure body parser is used to handle JSON requests

// Use the imported router for routing
app.use('/', router);

// Start the server
app.listen(3000, () => {
  console.log('Server running on port : 3000');
});

