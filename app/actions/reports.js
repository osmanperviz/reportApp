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
export function selectMessage(message) {
  return {
    type: types.SELECT_MESSAGE,
    message
  }
}
