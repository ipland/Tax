import { createReducer } from '../../lib/utils'
import { FETCH_PRODUCT_LIST } from './constants'

const initialState = []
export default createReducer(initialState, {
  [FETCH_PRODUCT_LIST]: (state, payload) => ( state.concat(payload.productList) )
})
