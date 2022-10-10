import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import StateWrapper from './context/share';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <React.StrictMode>
  <StateWrapper>
    <App />
  </StateWrapper>
  </React.StrictMode>
</BrowserRouter>
);
