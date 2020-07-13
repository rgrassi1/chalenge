import React, { useMemo, useState } from 'react';
import { FiList } from 'react-icons/fi';
import { useApp } from '../../hooks/app';
import { Container } from './styles';
import DropDown from '../Dropdown';
import Post from '../Post';
import IOrder from '../../types/order';
import orderByDate from '../../helpers/orderByDate';

const PostList: React.FC = () => {
  const { posts } = useApp();
  const [order, setOrder] = useState<IOrder>({ type: 'desc' });

  const orderedPosts = useMemo(() => {
    return posts.sort(orderByDate(order));
  }, [posts, order]);

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
