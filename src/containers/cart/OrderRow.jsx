import React from 'react'

import { toFixed, sum } from '../../lib/utils'

function OrderRow({ displayName, priceExTax, tax, weights }) {
  const clsName = `col-xs-${weights[0]} col-md-${weights[0]} col-lg-${weights[0]} order__name`
  const clsPrice = `col-xs-${weights[1]} col-md-${weights[1]} col-lg-${weights[1]} order__price`
  const clsTax = `col-xs-${weights[2]} col-md-${weights[2]} col-lg-${weights[2]} order__tax`
  const clsSum = `col-xs-${weights[3]} col-md-${weights[3]} col-lg-${weights[3]} order__sum`

  return (
    <div className="row order__row">
      <div className={clsName}>{displayName}</div>
      <div className={clsPrice}>{toFixed(priceExTax)}</div>
      <div className={clsTax}>{toFixed(tax)}</div>
      <div className={clsSum}>{toFixed(sum(priceExTax, tax, 2))}</div>
    </div>
  )
}

export default OrderRow
