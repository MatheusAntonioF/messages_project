const path = require('path');

module.exports = {
  type: 'sqlite',
  host: 'localhost',
  port: 3306,
  username: 'test',
  password: 'test',
  database: 'database.sqlite',
  synchronize: true,
  logging: false,
  entities: [
    path.resolve(__dirname, 'src', 'entgsdfgsdfity', '*.ts'),
  ],
  migrations: [
    path.resolve(__dirname, 'src', 'database','migration', '*.ts'),
  ],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/database/migration',
    subscribersDir: 'src/subscriber',
  },
};
