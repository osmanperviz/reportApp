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
export function setImageUrl(imageUrl) {
  return {
    type: types.SET_IMAGE_URL,
    imageUrl
  }
}
export function submitReport(data) {
  return {
    type: types.SUBMIT_REPORT,
    data
  }
}
