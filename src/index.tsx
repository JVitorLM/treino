import React from 'react';
import ReactDOM from 'react-dom/client';
import Rotas from './router';
import { GlobalStyle } from './styles/globalStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Rotas />
  </React.StrictMode>
);

