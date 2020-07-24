import { Router } from 'express';

import MessageController from '../controllers/message.controller';

const router = Router();

router.post('/:id', MessageController.create);

export default router;
