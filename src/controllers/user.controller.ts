import { Request, Response } from 'express';

import { getRepository } from 'typeorm';

import User from '../entities/user.entity';

import checkEmailExists from '../services/User/CheckEmailExists';

class UserController {
  async list(request: Request, response: Response):Promise<Response> {
    const allUsers = await getRepository(User)
      .find();

    return response.json(allUsers);
  }

  async show(request: Request<{id: string}>, response: Response):Promise<Response> {
    const { id } = request.params;

    // const userRepository = await getRepository(User).findOne(id);

    const userRepository = await getRepository(User).find({ where: { id }, relations: ['messages'] });

    if (!userRepository) {
      return response.status(404).json({ message: 'User not found' });
    }

    return response.json(userRepository);
  }

  async create(request: Request, response: Response):Promise<Response> {
    const userRepository = getRepository(User);

    if (checkEmailExists(request.body.email)) {
      return response.json({ message: 'Email already exists' });
    }

    const newUser = userRepository.create(request.body);

    const createdUser = await getRepository(User).save(newUser);

    return response.status(200).json(createdUser);
  }

  async update(request: Request<{id: string}>, response: Response):Promise<Response> {
    const { id } = request.params;

    const user = request.body as User;

    await getRepository(User).update(id, user);

    const userUpdated = await getRepository(User).findOne(id);

    return response.json(userUpdated);
  }

  async delete(request: Request<{id: string}>, response: Response):Promise<Response> {
    const { id } = request.params;

    const userRepository = getRepository(User);

    const userExists = userRepository.findOne(id);

    if (!!userExists) {
      return response.status(404).json({ message: 'User not found' });
    }

    return response
      .status(200)
      .json({ message: 'User deleted' });
  }
}

export default new UserController();
