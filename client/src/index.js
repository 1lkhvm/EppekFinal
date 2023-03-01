import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { MainContext } from './contexts/Main';
import './index.css';
import App from './app';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(



  <React.StrictMode>
    <App>
    </App>
  </React.StrictMode>


);

