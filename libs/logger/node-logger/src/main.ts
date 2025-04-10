import express from 'express';
import { logger } from './logger';
import cors from 'cors';
// const { eventBus } = require('@org/logger-utils');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Parse JSON body
app.use(cors({
  origin: 'http://localhost:4200', // Only allow this origin
  methods: ['POST'],              // Optional: allow only POST requests
  credentials: true,              // Optional: if you use cookies/auth
}));


// API to receive events from frontend
app.post('/event', (req, res) => {
  const { type, payload } = req.body;

  if (!type || !payload) {
    logger.warn('Received invalid event');
    return res.status(400).send('Invalid event');
  }

  logger.debug(`Received event: ${type}`);
  logger.info(payload);

  return res.status(200).send('Event received');
});

app.listen(port, () => {
  logger.info(`Server listening on http://localhost:${port}`);
});

// console.log("Script running")
// // Subscribe to events from React MFE
// eventBus.on('REACT_MESSAGE').subscribe((data:any) => {
//   console.log('Message received from React MFE:', data);
  
  
//   // Send response back to React MFE
//   eventBus.emit('NODE_MESSAGE', {
//     message: 'Hello from Node!',
//     timestamp: new Date().toISOString(),
//     receivedData: data
//   });
// });