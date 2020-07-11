import React from 'react';
import useFetchPosts from '../../hooks/useFetchPosts';

const App: React.FC = () => {
  const { posts } = useFetchPosts();

  return <div />;
};

export default App;
