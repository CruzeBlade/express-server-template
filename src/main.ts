import express from 'express';
import logger from './logger';
import cors from 'cors';
import 'dotenv/config';

const app = express();

const HOST = process.env.HOST ? (process.env.HOST as string) : 'localhost';
const PORT = process.env.PORT ? parseInt(process.env.PORT as string) : 4000;

app.use(express.json());
app.use(cors());

app.listen(PORT, HOST, () => {
    logger.info(`Server listening on http://${HOST}:${PORT}`);
});
