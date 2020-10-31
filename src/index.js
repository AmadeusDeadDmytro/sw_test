import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';

import App from './App';

import './index.css';

const queryCache = new QueryCache()

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <ReactQueryCacheProvider queryCache={queryCache}>
              <App />
          </ReactQueryCacheProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
