import React from 'react';

import GlobalStyle from './styles/global';

import BrowserRouter from './components/BrowserRouter';

import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
