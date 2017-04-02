import { FETCH_PRODUCT_LIST } from '../../../src/containers/product/constants'
import { fetchProductList } from '../../../src/containers/product/actions'

describe('product::actions', function() {
  describe('#fetchProductList()', function() {
    describe('fetchProductList(productList)', function() {
      it('should return `FETCH_PRODUCT_LIST` info', function() {
        const action = fetchProductList([
          { id: '1', name: 'book' }
        ])
        expect(action).to.deep.equal({
          type: FETCH_PRODUCT_LIST,
          payload: {
            productList: [{  id: '1', name: 'book' }]
          }
        })
      })
    })
  })
})