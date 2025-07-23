import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);