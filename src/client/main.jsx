import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import {BrowserRouter} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import {Provider} from 'react-redux';
import { ShoppingCartProvider } from './context/shoppingCartContext'
import store from './store/store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <ShoppingCartProvider>
          <BrowserRouter>
              <App />
          </BrowserRouter>
        </ShoppingCartProvider>
    </Provider>
  </React.StrictMode>,
)
