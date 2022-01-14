import { injectable } from 'tsyringe';
import Post from '@models/Post';

@injectable()
class GetPostsByUserService {
  async execute(id: String) {
    const posts = await Post.find({
      author: id,
    })
      .populate("author")
      .exec();
    return posts;
  }
}

export { GetPostsByUserService };
