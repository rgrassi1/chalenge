import React from 'react';
import useFetchPosts from '../../hooks/useFetchPosts';
import { Container } from './styles';
import Header from '../../components/Header';

const App: React.FC = () => {
  const { posts } = useFetchPosts();

  return (
    <Container>
      <Header />
      {JSON.stringify(posts)}
    </Container>
  );
};

export default App;
