import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css'; // Asegúrate de que esta ruta es correcta
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
