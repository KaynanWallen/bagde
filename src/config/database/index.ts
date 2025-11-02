import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const {
  DATABASE_URL,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  NODE_ENV,
} = process.env;

let sequelize: Sequelize;

if (DATABASE_URL) {
  // Usar connection string se disponível
  sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'postgres',
    logging: NODE_ENV === 'development' ? console.log : false,
  });
} else {
  // Usar variáveis individuais
  sequelize = new Sequelize(
    DB_NAME || 'bagde_db',
    DB_USER || 'postgres',
    DB_PASSWORD || 'postgres',
    {
      host: DB_HOST || 'localhost',
      port: Number(DB_PORT) || 5432,
      dialect: 'postgres',
      logging: NODE_ENV === 'development' ? console.log : false,
    }
  );
}

export default sequelize;

