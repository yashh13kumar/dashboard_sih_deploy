import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { UserProvider, ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
  <div>
    <UserProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </UserProvider>
  </div>,
  document.getElementById('root'),
);
