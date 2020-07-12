import React from 'react';
import useFetchPosts from '../../hooks/useFetchPosts';
import { Container } from './styles';
import Header from '../../components/Header';
import Summary from '../../components/Summary';
import PostList from '../../components/PostList';

const App: React.FC = () => {
  const { posts } = useFetchPosts();

  return (
    <Container>
      <Header />
      <hr />
      <Summary posts={posts} />
      <hr />
      <PostList posts={posts} />
    </Container>
  );
};

export default App;
