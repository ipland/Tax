import { ADD_CART, CHECKOUT  } from '../../../src/containers/cart/constants'
import { addCart, checkout } from '../../../src/containers/cart/actions'
import cartReducer from '../../../src/containers/cart/reducer'

describe('reducer::product', function() {
  describe('handle action::addCart', function() {
    let initialState = {}

    before(function() {
      initialState = { orders: [], checkout: false }
    })

    it('should merge `order` to state, add it when the quantity is more than 0', function() {
      const order = { id: 1,  quantity: 1 }
      const action = {
        type: ADD_CART,
        payload: { order }
      }

      const newState = cartReducer(initialState, action)

      expect(newState).to.deep.equal(
        Object.assign({}, initialState, {
          orders:
            initialState.orders
            .filter(_order => _order.id !== order.id) // filter orders maybe existed
            .concat(order)
            .filter(_order => _order.quantity > 0) // filter orders that more than zero
        })
      )
    })

    it('should merge `order` to state, remove it when the quantity is less than 1', function() {
      const order = { id: 1,  quantity: 0 }
      const action = {
        type: ADD_CART,
        payload: { order }
      }

      const newState = cartReducer(initialState, action)

      expect(newState).to.deep.equal(initialState)
    })
  })

  describe('handle action::checkout', function() {
    let initialState = {}

    before(function() {
      initialState = { orders: [], checkout: false }
    })

    it('should merge `checkout` to state, setting it to true', function() {
      const checkout = true
      const action = {
        type: CHECKOUT,
        payload: { shouldPay: checkout }
      }

      const newState = cartReducer(initialState, action)

      expect(newState).to.deep.equal(
        Object.assign({}, initialState, { checkout: true })
      )
    })
  })
})