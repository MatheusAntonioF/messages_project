import * as express from 'express';

import 'reflect-metadata';

import routes from './routes';

import './database';

class App {
  public server: express.Express

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares():void {
    this.server.use(express.json());
  }

  routes():void {
    this.server.use(routes);
  }
}

export default new App().server;
