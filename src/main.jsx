import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AuthProvides from './context/AuthProvides.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvides>
      <App/>
    </AuthProvides>
  
  </StrictMode>
);
