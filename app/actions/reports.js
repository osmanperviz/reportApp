import * as types from './types'

export function report(geoLocation) {
  return {
    type: types.REPORT,
    geoLocation
  }
}

export function setUserLocation(info) {
  return {
    type: types.SET_USER_LOCATION,
    info
  }
}
export function dismissModal() {
  return {
    type: types.DISMISS_MODAL,
  }
}
