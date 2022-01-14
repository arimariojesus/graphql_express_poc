import { CreateUSerController } from '@modules/users/controllers/CreateUserController';
import { Router } from 'express';

const routes = Router();

const createUserController = new CreateUSerController();

routes.post('/users', createUserController.handle);

export { routes };
