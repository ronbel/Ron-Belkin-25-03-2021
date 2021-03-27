import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { ToastProvider } from 'react-toast-notifications';

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider autoDismiss autoDismissTimeout={2500}>
      <App />
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
