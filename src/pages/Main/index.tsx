import React from 'react';
import { Container } from './styles';
import Header from '../../components/Header';
import Summary from '../../components/Summary';
import PostList from '../../components/PostList';

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <hr />
      <Summary />
      <hr />
      <PostList />
    </Container>
  );
};

export default Main;
