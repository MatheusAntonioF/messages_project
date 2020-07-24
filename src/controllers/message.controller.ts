import { Request, Response } from 'express';

import { getRepository } from 'typeorm';

import Message from '../entities/message.entity';

import User from '../entities/user.entity';

class MessageController {
  async create(request: Request<{id: string}>, response: Response):Promise<Response> {
    const { id } = request.params;

    const user = await getRepository(User).findOne(id);

    const message = request.body as Message;

    message.author_id = user;

    const newMessage = getRepository(Message).create(message);

    const createdMessage = await getRepository(Message).save(newMessage);

    return response.json(createdMessage);
  }
}

export default new MessageController();
