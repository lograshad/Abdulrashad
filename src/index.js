import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// side notes
// justice never sleeps

// todos
// lazy loading counter
// 404 page
// on mobile view move background thingy
// scroll down indication in hero section
// 766px for mobile view
// use onSceen hook for about me.
// animate exit for all pages
// add magnifier on scroll for portfolio details
// add grain
// front end developer too big
// "IM BATMAN IN HIDDEN"
// contact form
// set the form depending on the location