import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Notifications from './Notifications';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div className='root-notifications'>
      <Notifications />
      </div>
  </React.StrictMode>
);

reportWebVitals();