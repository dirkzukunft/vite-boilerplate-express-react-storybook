import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
dotenv.config();

const port = process.env.EXPRESS_PORT || 3001;
const app = express();
app.use(express.json());

app.use('/storybook', express.static('dist/storybook'));
app.use(express.static('dist/app'));

app.use(helmet());
app.disable('x-powered-by');

app.listen(port, async () => {
  console.log(`Listening at http://localhost:${port}`);
  console.log(`Storybook is at http://localhost:${port}/storybook`);
});
