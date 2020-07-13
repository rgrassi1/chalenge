import React, {
  useState,
  createContext,
  useContext,
  useCallback,
  useEffect,
} from 'react';
import api from '../services/api';
import IPost from '../types/post';
import IAuthor from '../types/author';

interface IAppContextData {
  posts: IPost[];
  authors: IAuthor[];
  filterByAuthorId(authorId: number): void;
}

const AppContext = createContext<IAppContextData>({} as IAppContextData);

export const AppProvider: React.FC = ({ children }) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [authors, setAuthors] = useState<IAuthor[]>([]);

  useEffect(() => {
    Promise.all([
      api.get<IPost[]>('/posts'),
      api.get<IAuthor[]>('/authors'),
    ]).then(([postsResponse, authorsResponse]) => {
      setPosts(postsResponse.data);
      setAuthors(authorsResponse.data);
    });
  }, []);

  const filterByAuthorId = useCallback((authorId: number) => {
    api.get<IPost[]>('/posts').then((response) => {
      setPosts(
        response.data.filter(
          (post) => post.metadata.authorId === authorId || !authorId,
        ),
      );
    });
  }, []);

  return (
    <AppContext.Provider value={{ posts, authors, filterByAuthorId }}>
      {children}
    </AppContext.Provider>
  );
};

export function useApp(): IAppContextData {
  const context = useContext(AppContext);

  return context;
}
