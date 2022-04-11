import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './redux/reducers/rootReducer';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';



import thunk from 'redux-thunk'
import Amplify from 'aws-amplify';
import config from './aws-exports'
import { StyledEngineProvider } from '@mui/material';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
//const store = createStoreWithMiddleware(rootReducer);

const store = createStore(
  rootReducer, // your reducers
  compose(
    applyMiddleware(thunk)
  )
)

Amplify.configure(config);


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <StyledEngineProvider injectFirst>

          <App />

        </StyledEngineProvider>

      </BrowserRouter>
    </Provider>
  </StrictMode>
);

/* 
ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>

        <App />


      </BrowserRouter>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
