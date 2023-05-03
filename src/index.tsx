import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from './components/Login';
import Signup from './components/Signup'
import ItemScreen from './components/ItemScreen';
import Appcontext from './context/Appcontext';
import CartProvide from './context/cartProvide';
import AllReducers from './redux/Reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Cart from './components/Cart';
import Order from './components/Order';
import thunk from "redux-thunk";
const store = createStore(AllReducers, applyMiddleware(thunk))
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Appcontext>
        <CartProvide>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/item' element={<ItemScreen />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/order' element={<Order />} />
            </Routes>
          </BrowserRouter>
        </CartProvide>
      </Appcontext>
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
