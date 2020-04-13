import { API } from './api';
import { Post } from '../Redux/post/post.model';
import { AxiosResponse } from 'axios';

class PostApi extends API {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  fetchPosts(): Promise<AxiosResponse<Post[]>> {
    return this.get<Post>('/posts');
  }

  createPosts(data: Post): Promise<AxiosResponse<Post>> {
    return this.post<Post>('/posts', data);
  }

  updatePosts(data: Post): Promise<AxiosResponse<Post>> {
    return this.put<Post>(`/posts/${data.id}`, data);
  }
}

export const PostService = new PostApi();
