import { Router } from 'express';

import UserController from '../controllers/user.controller';

const router = Router();

router.get('/', UserController.create);

export default router;
