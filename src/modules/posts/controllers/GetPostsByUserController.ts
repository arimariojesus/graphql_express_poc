import { CreateUserService } from "@modules/users/services/CreateUserService";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetPostsByUserService } from "../services/GetPostsByUserService";

class GetPostsByUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const getPostsByUserService = container.resolve(GetPostsByUserService);
    const posts = await getPostsByUserService.execute(id);

    return response.json(posts);
  }
}

export { GetPostsByUserController };
