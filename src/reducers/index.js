import { combineReducers } from 'redux'

import productList from '../containers/product/reducer'
import cart from '../containers/cart/reducer'

export default combineReducers({
  productList,
  cart
})