import React from 'react';
import Main from './pages/Main';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Main />
      <GlobalStyle />
    </React.Fragment>
  );
};

export default App;
