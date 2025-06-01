import express from 'express';
import { PrismaClient } from './config/database/generated/prisma';
import cors from 'cors';
import router from './config/routes/index.routes';

const app = express();
export const prisma = new PrismaClient();

app.use(express.json({ limit: '200mb' }));
app.use(cors());
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
