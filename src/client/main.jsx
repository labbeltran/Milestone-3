import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import { ShoppingCartProvider } from './context/shoppingCartContext';
import store from './store/store';
import { SearchProvider } from './context/SearchContext';
import './firebaseConfig.ts'; // Import the Firebase config file to initialize Firebase


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <SearchProvider>
        <ShoppingCartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ShoppingCartProvider>
      </SearchProvider>
    </Provider>
  </React.StrictMode>
);