import { Sequelize } from 'sequelize-typescript';
import * as config from '../core/config/database';
import path from 'path';
import fs from 'fs';

const currentFileExtension = path.extname(__filename);

const modelFiles = fs.readdirSync(__dirname).filter((file) => {
  return file !== `index${currentFileExtension}` && !file.endsWith('.map');
});

const models = modelFiles.map((file) => {
  const modelPath = path.join(__dirname, file);

  return require(modelPath).default;
});

const sequelize = new Sequelize({
  ...config.development,
  models,
});

export default sequelize;
