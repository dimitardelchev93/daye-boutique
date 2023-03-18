import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './core/auth/routes';
import productRoutes from './app/product/routes';
import config from './core/config';
import sequelize from './models';
import { errorHandlerMiddleware } from './core/config/middlewares';

(async () => {
  const app = express();

  try {
    await sequelize.authenticate();

    console.log('Database connection established');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }

  app.use(cors());
  app.use(bodyParser.json());

  app.use('/auth', authRoutes);
  app.use('/product', productRoutes);

  app.use(errorHandlerMiddleware);

  app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`);
  });
})();
