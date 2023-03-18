import { Dialect } from 'sequelize/types';

const config = {
  development: {
    dialect: 'sqlite' as Dialect,
    storage: 'database.sqlite',
  },
};

export = config;
