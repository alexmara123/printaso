import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Ensure this file exists and contains any necessary styles
import App from './App'; // Import the main App component

// This is the entry point to render the app into the DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This connects to the div with id 'root' in index.html
);
