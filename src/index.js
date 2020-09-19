import React from 'react'
import { render } from 'react-dom'
import { configureStore, ConfigureStore } from '@reduxjs/toolkit' //new
import { Provider } from 'react-redux'
//import {createStore, applyMiddleware} from 'redux'
//import thunk from 'redux-thunk'
//import {composeWithDevTools} from 'redux-devtools-extension'

// Local imports
import App from './App'
import rootReducer from './slices' //new
//import rootReducer from './reducers'

// Assets
import './index.css'

const store = configureStore({ reducer: rootReducer })
//const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)