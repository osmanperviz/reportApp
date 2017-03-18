import createReducer from '../lib/CreateReducer'
import * as types from '../actions/types'

initialState = {
  lat: null,
  lot: null,
  deviceId: null,
  modalVisible: false
}

const report = createReducer(initialState, {
  [types.SET_USER_LOCATION_SUCCESS](state, action){
    return Object.assign({}, state, {
      modalVisible: true,
      ...action.payload,
    })
    return [...state,...action.payload]
  },
  [types.SET_USER_LOCATION_ERROR](state, action){

  },
  [types.DISMISS_MODAL](state, action){
    return Object.assign({}, state, {
      modalVisible: false
    })
  }
})

export default report
