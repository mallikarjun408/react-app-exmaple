import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './redux/reducers/rootReducer';
import {  BrowserRouter, BrowserRouter as Router } from 'react-router-dom';



import thunk from 'redux-thunk'
import Amplify from 'aws-amplify';
import config from './aws-exports'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
//const store = createStoreWithMiddleware(rootReducer);

const store = createStore(
  rootReducer, // your reducers
  compose(
    applyMiddleware(thunk)
  )
)

Amplify.configure(config);

ReactDOM.render(
 
   
      <Provider store={store}>
      <BrowserRouter>
    
        <App/>
      
        </BrowserRouter>
      </Provider>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
