import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App';
import About from './component/About';
import Work from './component/Work';
import Header from './component/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <About />
    <Work />
  </React.StrictMode>
);

