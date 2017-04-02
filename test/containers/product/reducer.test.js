import { FETCH_PRODUCT_LIST } from '../../../src/containers/product/constants'
import { fetchProductList } from '../../../src/containers/product/actions'
import productReducer from '../../../src/containers/product/reducer'

describe('reducer::product', function() {
  describe('handle action::FETCH_PRODUCT_LIST', function() {
    let initialState = []

    before(function() {
      initialState = [ { id: 1, name: 'book' } ]
    })

    it('should merge `productList` to state', function() {
      const productList = [ { id: 2, name: 'food' } ]
      const action = {
        type: FETCH_PRODUCT_LIST,
        payload: { productList }
      }

      const newState = productReducer(initialState, action)

      expect(newState.length).to.equal((initialState.concat(productList)).length)
      expect(newState).to.deep.equal(initialState.concat(productList))
    })
  })
})