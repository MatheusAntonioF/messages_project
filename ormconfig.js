const path = require('path');

module.exports = {
  name: 'default',
  type: 'sqlite',
  host: 'localhost',
  port: 3306,
  username: 'test',
  password: 'test',
  database: 'database.sqlite',
  synchronize: true,
  logging: false,
  entities: [
    path.resolve(__dirname, 'src', 'entities', '*.ts'),
  ],
  migrations: [
    path.resolve(__dirname, 'src', 'database','migrations', '*.ts'),
  ],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/database/migration',
    subscribersDir: 'src/subscriber',
  },
};
