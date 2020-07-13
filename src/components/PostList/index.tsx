import React, { useMemo, useState } from 'react';
import { isAfter } from 'date-fns';
import { FiList } from 'react-icons/fi';
import { useApp } from '../../hooks/app';
import { Container } from './styles';
import DropDown from '../Dropdown';
import Post from '../Post';
import IOrder from '../../types/order';

const PostList: React.FC = () => {
  const { posts } = useApp();
  const [order, setOrder] = useState<IOrder>({ type: 'desc' });

  // const orderedPosts = useMemo(() => {
  //   return posts.sort((curr, next) => {
  //     const currDate = new Date(curr.metadata.publishedAt).getTime();
  //     const nextDate = new Date(next.metadata.publishedAt).getTime();
  //     if (isAfter(currDate, nextDate)) {
  //       return order.type === 'desc' ? -1 : 1;
  //     }
  //     return order.type === 'desc' ? 1 : -1;
  //   });
  // }, [posts, order]);

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
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </ul>
    </Container>
  );
};

export default PostList;
