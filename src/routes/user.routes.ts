import { Router } from 'express';

import UserController from '../controllers/user.controller';

const router = Router();

router.get('/', UserController.list);

router.post('/', UserController.create);

router.delete('/:id', UserController.delete);

export default router;
