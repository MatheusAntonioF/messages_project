import { Connection, createConnection } from 'typeorm';

class Database {
  private connection: Connection;

  constructor() {
    createConnection().then(connection => {
      this.connection = connection;
    });
  }

  connected():boolean {
    return typeof this.connection !== 'undefined';
  }

  getRepository(nameRepository: string) {
    if (!this.connected()) {
      throw new Error('Repository not found');
    }

    this.getRepository(nameRepository);
  }
}

export default new Database();
