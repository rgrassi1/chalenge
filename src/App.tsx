import React from 'react';
import Main from './pages/Main';
import GlobalStyle from './styles/global';
import { PostsProvider } from './hooks/posts';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <PostsProvider>
        <Main />
      </PostsProvider>
      <GlobalStyle />
    </React.Fragment>
  );
};

export default App;
