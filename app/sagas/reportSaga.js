import { fork, put, call, select, takeEvery } from "redux-saga/effects"
import Api from '../lib/Api'
import * as types from '../actions/types'


function* performSetUserLocation(request){
  try {
    const { lat, lot, deviceId } = request.info
    path = `http://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lot}&sensor=false`
    const { results } = yield call(Api.get,path)
    const { address, administrativeCentar } = handleResponse(results)
    yield put({ type: types.SET_USER_LOCATION_SUCCESS, payload: {address, administrativeCentar, lat, lot, deviceId}})
  } catch (err) {
    console.info(err)
  }
}

function handleResponse(results) {
  return {
    address: results[0].formatted_address,
    administrativeCentar: results[2].address_components[0].long_name
  }
}

function* watchSetUserLocation() {
  yield takeEvery(types.SET_USER_LOCATION, performSetUserLocation);
}

export default [
  fork(watchSetUserLocation),
]
