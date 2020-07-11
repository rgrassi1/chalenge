import { useEffect, useState } from 'react';
import api from '../services/api';
import IPost from '../models/post';

const useFetchPosts = (): { posts: IPost[] } => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    api.get<IPost[]>('/posts').then((response) => {
      setPosts(response.data);
    });
  }, []);

  return { posts };
};

export default useFetchPosts;
