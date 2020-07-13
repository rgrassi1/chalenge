import React from 'react';
import Main from './pages/Main';
import GlobalStyle from './styles/global';
import { AppProvider } from './hooks/app';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <AppProvider>
        <Main />
      </AppProvider>
      <GlobalStyle />
    </React.Fragment>
  );
};

export default App;
