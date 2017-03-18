import { fork, put, call, select, takeEvery,take } from "redux-saga/effects"
import Api from '../lib/Api'
import * as types from '../actions/types'

function* performSetUserLocation(request){
  try {
    const { lat, lot, deviceId } = request.info
    const { results } = yield call(Api.getLocationData, lat, lot)
    const { address, administrativeCentar } = handleResponse(results)
    yield put({ type: types.SET_USER_LOCATION_SUCCESS, payload: {address, administrativeCentar, lat, lot, deviceId}})
  } catch (err) {
    yield put({ type: types.SET_USER_LOCATION_ERROR})
  }
}

function handleResponse(results) {
  return {
    address: results[0].formatted_address,
    administrativeCentar: results[2].address_components[0].long_name
  }
}

export const getProject = (state) => state.report

function* watchSetUserLocation() {
  yield takeEvery(types.SET_USER_LOCATION, performSetUserLocation);
}

export default [
  fork(watchSetUserLocation),
]
