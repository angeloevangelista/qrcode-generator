import React from 'react';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';

import BrowserRouter from './components/BrowserRouter';

import store from './store';

import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

console.log('Visit the repo clicking the Logo ;)');

export default App;
