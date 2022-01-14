import { GetPostsByUserController } from '@modules/posts/controllers/GetPostsByUserController';
import { CreateUSerController } from '@modules/users/controllers/CreateUserController';
import { Router } from 'express';

const routes = Router();

const createUserController = new CreateUSerController();
const getPostsByUserController = new GetPostsByUserController();

routes.post('/users', createUserController.handle);
routes.post('/posts/user/:id', getPostsByUserController.handle);

export { routes };
