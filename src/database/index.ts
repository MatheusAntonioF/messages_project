import {
  createConnection, getConnection, Connection,
} from 'typeorm';

class Database {
  constructor() {
    this.init();
  }

  async init():Promise<Connection> {
    return createConnection();
  }

  connected():boolean {
    return getConnection().isConnected;
  }
}

export default Database;
