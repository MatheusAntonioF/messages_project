import { Router } from 'express';

import userRoutes from './user.routes';

import messageRoutes from './message.routes';

const routes = Router();

routes.use('/users', userRoutes);

routes.use('/messages', messageRoutes);

export default routes;
