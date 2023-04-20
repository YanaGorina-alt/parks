import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'


// createRoot method takes a DOM element as an argument,
// which in this case is the element with the ID of 'root' on the HTML page.
// and returns a root object that is used to render the React application.

const root = ReactDOM.createRoot(document.getElementById('root'));

// render method is called with the main component of the application, <App />,
// The <Router> component provides routing functionality to the application,
// allowing it to navigate between different views based on the URL.

 root.render(
  <React.StrictMode>
    <Router>
     <App />
    </Router>
  </React.StrictMode>
);


