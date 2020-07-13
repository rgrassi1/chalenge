import React, {
  useState,
  createContext,
  useContext,
  useCallback,
  useEffect,
} from 'react';
import api from '../services/api';
import IPost from '../types/post';
import IAuhtor from '../types/author';

interface IPostsContextData {
  posts: IPost[];
  filterByAuthorId(authorId: number): void;
}

const PostsContext = createContext<IPostsContextData>({} as IPostsContextData);

export const PostsProvider: React.FC = ({ children }) => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    Promise.all([
      api.get<IPost[]>('/posts'),
      api.get<IAuhtor[]>('/authors'),
    ]).then(([postsResponse, authorsResponse]) => {
      const populatedPosts = postsResponse.data.map((post) => {
        const populatedAuthor = authorsResponse.data.find(
          (author) => author.id === post.metadata.authorId,
        );
        return { ...post, author: populatedAuthor };
      });

      setPosts(populatedPosts);
    });
  }, []);

  const filterByAuthorId = useCallback((authorId: number) => {
    Promise.all([
      api.get<IPost[]>('/posts'),
      api.get<IAuhtor[]>('/authors'),
    ]).then(([postsResponse, authorsResponse]) => {
      const filteredPosts = postsResponse.data
        .map((post) => {
          const populatedAuthor = authorsResponse.data.find(
            (author) => author.id === post.metadata.authorId,
          );
          return { ...post, author: populatedAuthor };
        })
        .filter((post) => post.metadata.authorId === authorId || !authorId);

      setPosts(filteredPosts);
    });
  }, []);

  return (
    <PostsContext.Provider value={{ posts, filterByAuthorId }}>
      {children}
    </PostsContext.Provider>
  );
};

export function usePosts(): IPostsContextData {
  const context = useContext(PostsContext);

  return context;
}
