import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App';
import About from './component/About';
import Work from './component/Work';
import Header from './component/Header';
import Project from './component/Project';
import ContactUs from './component/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    {/* <About />
    <Work />
    <Project />
    <ContactUs /> */}
  </React.StrictMode>
);

