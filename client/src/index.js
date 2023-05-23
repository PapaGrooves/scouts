import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/scss/app.css'
import { UsersContextProvider } from './context/usersContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <UsersContextProvider>
        <App />
      </UsersContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
