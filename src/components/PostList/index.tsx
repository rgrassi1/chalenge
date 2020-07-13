import React, { useMemo, useState, useCallback } from 'react';
import { isAfter } from 'date-fns';
import { FiList } from 'react-icons/fi';
import { useApp } from '../../hooks/app';
import { Container } from './styles';
import DropDown from '../Dropdown';
import Post from '../Post';
import IOrder from '../../types/order';
import IPost from '../../types/post';

const PostList: React.FC = () => {
  const { posts } = useApp();
  const [order, setOrder] = useState<IOrder>({ type: 'desc' });

  const orderByData = useCallback(
    (curr: IPost, next: IPost) => {
      const currDate = new Date(curr.metadata.publishedAt).getTime();
      const nextDate = new Date(next.metadata.publishedAt).getTime();
      if (isAfter(currDate, nextDate)) {
        return order.type === 'desc' ? -1 : 1;
      }
      return order.type === 'desc' ? 1 : -1;
    },
    [order],
  );

  const orderedPosts = useMemo(() => {
    return posts.sort(orderByData);
  }, [posts, orderByData]);

  return (
    <Container>
      <div>
        <h2>
          <FiList />
          List Of Posts
        </h2>
        <DropDown order={order} setOrder={setOrder} />
      </div>
      <ul>
        {orderedPosts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </ul>
    </Container>
  );
};

export default PostList;
