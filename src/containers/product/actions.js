import { FETCH_PRODUCT_LIST } from './constants'

export function fetchProductList(productList) {
  return {
    type: FETCH_PRODUCT_LIST,
    payload: {
      productList
    }
  }
}