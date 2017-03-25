import { fork, put, call, select, takeLatest,takeEvery } from "redux-saga/effects"
import Api from '../lib/Api'
import * as types from '../actions/types'

function* performSetUserLocation(request){
  try {
    const { latitude, longitude, deviceId } = request.info
    const { results } = yield call(Api.getLocationData, latitude, longitude)
    const { address, administrativeCentar } = handleResponse(results)
    yield put({ type: types.SET_USER_LOCATION_SUCCESS, payload: {address, administrativeCentar, latitude, longitude, deviceId}})
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

function* performSubmitReport(request) {
  try {
    debugger;
    yield call(Api.post, '/reports', request.data)
  } catch (err) {
    console.log(err)
  }
}

function* watchSubmitReport() {
  yield takeEvery(types.SUBMIT_REPORT, performSubmitReport);
}

function* watchSetUserLocation() {
  yield takeLatest(types.SET_USER_LOCATION, performSetUserLocation);
}

// function* watchLoadingState() {
//   debugger;
//   yield takeEvery('*', () =>{
//     put('SET_LOADING_STATE')
//   });
// }

export default [
  fork(watchSetUserLocation),
  fork(watchSubmitReport),
]
