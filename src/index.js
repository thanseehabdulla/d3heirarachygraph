import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import generateTree from './generateTree'
import App from './containers/App'
import 'bootstrap/dist/css/bootstrap.min.css';

const tree = generateTree()
const store = createStore(reducer, tree)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
