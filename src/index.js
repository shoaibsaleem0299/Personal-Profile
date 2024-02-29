import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './About';
import Work from './Work';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <About />
    <Work />
  </React.StrictMode>
);

