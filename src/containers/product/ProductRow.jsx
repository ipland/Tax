import React from 'react'

import { toFixed } from '../../lib/utils'

function ProductRow(product) {
  const { id, name, price, quantity, action } = product
  let input

  function handleAction() {
    // Note: The latter covers the former
    // 1) 0 ==> remove order
    // 2) >0 ==> add order
    if (+input.value < 0) return

    action(Object.assign({}, product, { quantity: +input.value }))
  }

  return (
    <div className="row product__row">
      <div className="col-xs-6 col-md-6 col-lg-6 product__name">{name}</div>
      <div className="col-xs-2 col-md-2 col-lg-2 product__price">{toFixed(price)}</div>
      <div className="col-xs-2 col-md-2 col-lg-2 product__quantity">
        <input className="product__quantity-input" type="number" ref={(node) => {input = node}} />
      </div>
      <div className="col-xs-2 col-md-2 col-lg-2 product__action">
        <a className="product__action-add" href="javascript:void(0);" onClick={handleAction}>Add to Cart</a>
      </div>
    </div>
  )
}

export default ProductRow
