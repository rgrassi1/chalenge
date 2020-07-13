import { useEffect, useState } from 'react';
import api from '../services/api';
import IAuthor from '../types/author';

const useFetchAuthors = (): { authors: IAuthor[] } => {
  const [authors, setAuthors] = useState<IAuthor[]>([]);

  useEffect(() => {
    api.get<IAuthor[]>('/authors').then((response) => {
      setAuthors(response.data);
    });
  }, []);

  return { authors };
};

export default useFetchAuthors;
