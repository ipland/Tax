export function createReducer(initialState, reduceMap) {
  return (state = initialState, action) => {
    const reducer = reduceMap[action.type]

    return reducer
      ? reducer(state, action.payload)
      : state
  }
}

// Round up to the nearest 0.05
export function roundUp(val) {
  return Math.ceil(val * 20) / 20
}

export function noop() {}

// The number is not rounded up or down,
// just slice from 0 to the number of digits to appear after the decimal point
// the fractional part is padded with zeros if necessary so that it has the specified length
export function toFixed(val, digits = 2) {
  val = typeof val !== 'number' ? Number(val) : val
  const pointIndex = String(val).indexOf('.')

  if (!~pointIndex) {
    return String(val) + '.00'
  }

  return (String(val) + '0000').slice(0, pointIndex + digits + 1)
}

// Make sure the sum of a + b is correct, get rid of the infection of float number
export function sum(a, b, digits = 2) {
  digits = Math.pow(10, digits)
  return ((a * digits) + (b * digits)) / digits
}