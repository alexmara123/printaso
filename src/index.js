import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Import the App component

// Render the App component to the DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Make sure your index.html has <div id="root"></div>
);
