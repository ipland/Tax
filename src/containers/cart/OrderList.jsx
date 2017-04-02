import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../../components/Header'
import OrderRow from './OrderRow'
import './cart.scss'
import { roundUp, toFixed, sum } from '../../lib/utils'
import _DATA_ from '../../../mock.json'

function checkout(cart, taxList = _DATA_.taxList, taxFree= _DATA_.taxFree, ownProps) {
  return cart.map(product => {
    // wheather belong to type of dutyFree, such as books, food, medical products
    const isTaxFree = taxFree.includes(product.category)
    const isImported = product.imported
    const tax = taxList.reduce((acc, tax) => {
      if (tax.name === 'basic') {
        // acc += isTaxFree ? 0 : tax.rateOfTax
        acc = sum(acc, isTaxFree ? 0 : tax.rateOfTax, 2)
      }

      if (tax.name === 'imported') {
        // acc += !isImported ? 0 : tax.rateOfTax
        acc = sum(acc, !isImported ? 0 : tax.rateOfTax, 2)
      }
      return acc
    }, 0)

    // console.warn("tax", tax, product)

    return {
      id: product.id,
      name: product.name,
      quantity: product.quantity,
      displayName: product.quantity ? product.single : product.plural,
      price: product.price,
      tax: tax
    }
  })
  // evaluation
  .reduce((acc, product) => {
    return acc.concat(
      {
        id: product.id,
        name: product.name,
        displayName: product.displayName || product.name,
        priceExTax: product.price * product.quantity,
        tax: roundUp(product.tax * product.quantity * product.price)
      }
    )
  }, [])
}

class OrderList extends Component {
  render() {
    const { cart } = this.props

    const titles = ['Goods & Quantity', 'Price excluding tax', 'Tax', 'Price including tax']
    const weights = [4, 3, 2, 3]
    const totalTax = toFixed(cart.reduce((acc, order) => ( sum(acc, order.tax, 2) ), 0))
    const totalPrice = toFixed(cart.reduce((acc, order) => ( sum(sum(acc, order.tax, 2), order.priceExTax, 2)), 0))

    return (
      <div>
        <div className="order__list">
          <Header titles={titles} weights={weights} />
          {
            cart.map((order, key) => (
              <OrderRow {...order} key={key} weights={weights}/>
            ))
          }
        </div>
        <div className="row bill__row">
          <div className="col-xs-offset-4 col-xs-8 bill__total">
            <div className="bill__total-tax">Sales Taxes: {totalTax}</div>{', '}
            <div className="bill__total-price">Total: {totalPrice}</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.checkout ? checkout(state.cart.orders, state.taxList, state.taxFree) : []
})

export default connect(mapStateToProps)(OrderList)
