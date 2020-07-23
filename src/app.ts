import * as express from 'express';

import 'reflect-metadata';

import routes from './routes';

import Database from './database';

class App {
  public server: express.Express

  public database: Database;

  constructor() {
    this.database = this.connection();

    this.server = express();

    this.middlewares();

    this.routes();
  }

  connection() {
    return new Database();
  }

  middlewares():void {
    this.server.use(express.json());
  }

  routes():void {
    this.server.use('/', routes);
  }
}

export default new App().server;
