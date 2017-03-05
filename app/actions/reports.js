import * as types from './types'

export function report(geoLocation) {
  return {
    type: types.REPORT,
    geoLocation
  }
}
