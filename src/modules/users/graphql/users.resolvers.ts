import { container } from "tsyringe";
import { GetUsersService } from "../services/GetUsersService";



const usersResolvers = {
  Query: {
    getAllUsers() {
      const getUsersService = container.resolve(GetUsersService);
      const users = getUsersService.execute();
      return users;
    }
  },
  // Mutation: {}
};

export default usersResolvers;