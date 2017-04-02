import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'normalize.css'
import 'flexboxgrid'

import ProductList from '../containers/product/ProductList'
import OrderList from '../containers/cart/OrderList'
import Header from '../components/Header'
import { checkout } from '../containers/cart/actions'

import '../style/global.scss'
import '../style/layout.scss'

function App({ checkout }) {
  return (
    <div className="app--center">
      <ProductList />
      <div className="row">
        <button className="col-xs-offset-10 col-xs-2 btn-checkout" onClick={checkout}>Checkout</button>
      </div>
      <OrderList />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  checkout: () => {
    dispatch(checkout(true))
  }
})

export default connect(null, mapDispatchToProps)(App)
