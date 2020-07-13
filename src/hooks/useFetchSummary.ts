import { useEffect, useState } from 'react';
import { isAfter } from 'date-fns';
import api from '../services/api';
import IPost from '../types/post';

interface IProps {
  latestPosts: number;
}

const useFetchSummary = ({ latestPosts }: IProps): { summary: IPost[] } => {
  const [summary, setSummary] = useState<IPost[]>([]);

  useEffect(() => {
    api.get<IPost[]>('/posts').then((response) => {
      const lastPosts = response.data
        .sort((curr, next) => {
          const currDate = new Date(curr.metadata.publishedAt);
          const nextDate = new Date(next.metadata.publishedAt);
          return isAfter(currDate, nextDate) ? -1 : 1;
        })
        .filter((_, idx) => idx < latestPosts);

      setSummary(lastPosts);
    });
  }, [latestPosts]);

  return { summary };
};

export default useFetchSummary;
