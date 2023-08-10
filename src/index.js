import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));


const ClientId=process.env.REACT_APP_clientid


root.render(
  <GoogleOAuthProvider clientId={ClientId}>
    <App />
  
  </GoogleOAuthProvider>
);

reportWebVitals();
