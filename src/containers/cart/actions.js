import { ADD_CART, CHECKOUT } from './constants'

export function addCart(order) {
  return {
    type: ADD_CART,
    payload: { order }
  }
}

export function checkout(shouldPay = false) {
  return {
    type: CHECKOUT,
    payload: { shouldPay }
  }
}