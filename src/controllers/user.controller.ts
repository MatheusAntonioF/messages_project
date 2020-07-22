import { getConnectionManager } from 'typeorm';

import { Request, Response } from 'express';

import User from '../entity/user.entity';

class UserController {
  private user: User;

  constructor() {
    const connection = getConnectionManager();
    connection.get('default').getRepository(User);
  }

  create(request: Request, response: Response) {
    console.log('asdfasd');
  }
}

export default new UserController();
