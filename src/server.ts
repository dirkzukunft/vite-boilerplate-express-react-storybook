import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import helmet from 'helmet';

const port = process.env.EXPRESS_PORT || 3001;
const app = express();
app.use(express.json());
app.use(helmet());

app.get('/', (req, res) => {
  res.send(`Hello, the server v2 is running and data is ${JSON.stringify(req.query)}`);
});

app.get('/test', (req, res) => {
  res.send(`Oh, a test! :) ... and more data? ${JSON.stringify(req.query)}`);
});

app.post('/', (req, res) => {
  res.send(`Oh yes, I got a POST request :) And the data is: ${JSON.stringify(req.body)}`);
});

app.listen(port, async () => {
  console.log(`Listening at http://localhost:${port}`);
});
