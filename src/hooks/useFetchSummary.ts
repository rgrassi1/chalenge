import { useEffect, useState } from 'react';
import api from '../services/api';
import IPost from '../types/post';
import orderByDate from '../helpers/orderByDate';

interface IProps {
  latestPosts: number;
}

const useFetchSummary = ({ latestPosts }: IProps): { summary: IPost[] } => {
  const [summary, setSummary] = useState<IPost[]>([]);

  useEffect(() => {
    api.get<IPost[]>('/posts').then((response) => {
      const lastPosts = response.data
        .sort(orderByDate({ type: 'desc' }))
        .filter((_, idx) => idx < latestPosts);

      setSummary(lastPosts);
    });
  }, [latestPosts]);

  return { summary };
};

export default useFetchSummary;
