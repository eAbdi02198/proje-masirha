import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

import { HashRouter } from 'react-router-dom';

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);