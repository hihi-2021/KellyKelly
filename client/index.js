import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'

import reducers from '../client/reduces'


import App from './components/App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
   applyMiddleware(thunkMiddleware)
))

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(   
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})
