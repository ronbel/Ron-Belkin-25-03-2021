import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { ToastProvider } from 'react-toast-notifications';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider placement="top-center" autoDismiss autoDismissTimeout={2500}>
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
