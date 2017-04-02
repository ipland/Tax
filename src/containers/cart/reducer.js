import { createReducer } from '../../lib/utils'
import { ADD_CART, CHECKOUT } from './constants'

const initialState = { orders: [], shouldPay: false }
export default createReducer(initialState, {
  [ADD_CART]: (state, payload) => (
    Object.assign({}, state, {
      orders:
        state.orders
        .filter(order => order.id !== payload.order.id) // filter orders maybe existed
        .concat(payload.order)
        .filter(order => order.quantity > 0) // filter orders that more than zero
    })
  ),
  [CHECKOUT]: (state, payload) => (
    Object.assign({}, state, {
      checkout: payload.shouldPay
    })
  )
})
