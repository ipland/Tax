import React from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header'
import ProductRow from './ProductRow'
import './product.scss'
import { addCart, checkout } from '../cart/actions'

function ProductList({ addCart, productList }) {
  const titles = ['Goods', 'Price', 'Quantity', 'Action']
  const weights = [6, 2, 2, 2]
  return (
    <div className="product__list">
      <Header titles={titles} weights={weights} />
      {
        productList.map((product, key) => (
          <ProductRow {...product} key={key} action={addCart}/>
        ))
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  productList: state.productList
})

const mapDispatchToProps = (dispatch) => ({
  addCart: (order) => {
    dispatch(addCart(order))
  },
  clearCheckout: () => {
    dispatch(checkout(false))
  }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => (
  Object.assign({}, ownProps, {
    productList: stateProps.productList,
    addCart: (order) => {
      dispatchProps.clearCheckout()
      dispatchProps.addCart(order)
    }
  }
))

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ProductList)
