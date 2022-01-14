import { container } from 'tsyringe';
import { CreatePostService } from '../services/CreatePostService';
import { GetPostsByUserService } from '../services/GetPostsByUserService';

const postsResolver = {
  
  Mutation: {
    createPost(_, { input }) {
      const createPostService = container.resolve(CreatePostService);
      const post = createPostService.execute(input);
      return post;
    }
  },
  Query: {
    getPostsByUser(_, { idUser }) {
      const getPostByUser = container.resolve(GetPostsByUserService);
      const posts = getPostByUser.execute(idUser);
      return posts;
    }
  }
};

export default postsResolver;