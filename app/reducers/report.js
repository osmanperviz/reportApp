import createReducer from '../lib/CreateReducer'
import * as types from '../actions/types'

initialState = {
  modalVisible: false
}
const report = createReducer(initialState, {
  [types.SET_USER_LOCATION_SUCCESS](state, action){
    return Object.assign({}, state, {
      modalVisible: true,
      ...action.payload,
    })
  },
  [types.SET_USER_LOCATION_ERROR](state, action){
    return state
  },
  [types.SELECT_MESSAGE](state, action){
    return Object.assign({}, state, {
      message: action.message,
      modalVisible: false
    })
  }
})

export default report
