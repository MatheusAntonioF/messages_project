import { Request, Response } from 'express';

import { getRepository } from 'typeorm';

import User from '../entities/user.entity';

class UserController {
  async create(request: Request, response: Response):Promise<Response> {
    const users = await getRepository(User).create();

    return response.json(users);
  }
}

export default new UserController();
