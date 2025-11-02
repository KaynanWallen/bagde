import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './config/database';
import router from './config/routes/index.routes';

dotenv.config();

const app = express();

// Middlewares
app.use(express.json({ limit: '200mb' }));
app.use(cors());

// Routes
app.use('/api', router);

// Root route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Bem-vindo à API Bagde' });
});

const PORT = process.env.PORT || 3000;

// Initialize database and start server
async function startServer() {
  try {
    // Test database connection
    await sequelize.authenticate();
    console.log('✅ Conexão com o banco de dados estabelecida com sucesso.');

    // Sync models (create tables if they don't exist)
    // Em produção, usar migrations ao invés de sync
    if (process.env.NODE_ENV !== 'production') {
      await sequelize.sync({ alter: true });
      console.log('✅ Modelos sincronizados com o banco de dados.');
    }

    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Erro ao conectar com o banco de dados:', error);
    process.exit(1);
  }
}

startServer();

export default app;
