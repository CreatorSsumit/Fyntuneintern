import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from "react-redux";
import { createStore ,applyMiddleware } from "redux"
import {BrowserRouter,Route} from "react-router-dom"
import Reducers from "./reducers"
import * as serviceWorker from './serviceWorker';
import PromiseWare from "redux-promise";
import Headers from "./components/fixcomponent/header"
import Productlistpage from './components/fixcomponent/productpage'
import Productinfo from "./components/fixcomponent/productinfo" 
import Cart from "./components/fixcomponent/cart"
const createStoreMiddeleWrare = applyMiddleware(PromiseWare)(createStore)

ReactDOM.render(

 <Provider store={createStoreMiddeleWrare(Reducers)}>
<BrowserRouter>
 <Headers />
 <Route exact path='/cart' component={Cart} />
 <Route exact path="/product/:productinfo" component={Productinfo} />
 
 <Route exact path="/register" component={App} />
 <Route exact path="/" component={Productlistpage} />
  
    
   
 
    </BrowserRouter>

 </Provider>
   ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
