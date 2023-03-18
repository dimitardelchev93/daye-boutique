import dotenv from 'dotenv';
import { BackendConfig } from './types';

dotenv.config();

const config: BackendConfig = {
  projectName: 'Daye',
  port: Number(process.env.PORT) || 3000,
  jwtSecret: process.env.JWT_SECRET || 'some-secret-string',
};

export default config;
