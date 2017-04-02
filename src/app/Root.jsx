import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import configureStore from '../store/configureStore'
import _DATA_ from '../../mock.json'

const { store } = configureStore({
  productList: _DATA_.productList
})

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Root
