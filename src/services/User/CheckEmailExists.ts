import { getRepository } from 'typeorm';

import User from '../../entities/user.entity';

export default async function checkEmailExists(emailToCheck: string):Promise<boolean> {
  const userRepository = getRepository(User);

  const user = await userRepository.find({ where: { email: emailToCheck } });

  if (user) {
    return true;
  }
  return false;
}
