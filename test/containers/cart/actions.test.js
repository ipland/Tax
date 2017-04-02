import { ADD_CART, CHECKOUT } from '../../../src/containers/cart/constants'
import { addCart, checkout } from '../../../src/containers/cart/actions'

describe('cart::actions', function() {
  describe('#addCart()', function() {
    describe('addCart(order)', function() {
      it('should return action `ADD_CART` info', function() {
        const action = addCart({
          id: '1',
          name: 'book'
        })
        expect(action).to.deep.equal({
          type: ADD_CART,
          payload: {
            order: {
              id: '1',
              name: 'book'
            }
          }
        })
      })
    })
  })

  describe('#checkout()', function() {
    describe('checkout false', function() {
      it('should return action `CHECKOUT` info', function() {
        const action = checkout(false)
        expect(action).to.deep.equal({
          type: CHECKOUT,
          payload: { shouldPay: false }
        })
      })
    })

    describe('checkout true', function() {
      it('should return action `CHECKOUT` info', function() {
        const action = checkout(true)
        expect(action).to.deep.equal({
          type: CHECKOUT,
          payload: { shouldPay: true }
        })
      })
    })
  })
})