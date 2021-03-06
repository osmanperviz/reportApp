import createReducer from '../lib/CreateReducer'
import * as types from '../actions/types'

initialState = {
  modalVisible: false,
  loading: false,
  allow_custom_subject: false
}
const report = createReducer(initialState, {
  [types.SET_USER_LOCATION_SUCCESS](state, action){
    return Object.assign({}, state, {
      modalVisible: true,
      loading: false,
      ...action.payload,
    })
  },
  [types.SET_USER_LOCATION_ERROR](state, action){
    return state
  },
  [types.SELECT_MESSAGE](state, action){
    return Object.assign({}, state, {
      message: action.message,
      modalVisible: false,
      loading: false,
      allow_custom_subject: false
    })
  },
  [types.SET_IMAGE_URL](state, action){
    return Object.assign({}, state, {
      image_url: action.imageUrl,
      loading: false
    })
  },
  [types.SET_LOADING_STATE](state, action){
    return Object.assign({}, state, {
      loading: true
    })
  },
  [types.PERMIT_CUSTUM_SUBJECT](state, action){
    return Object.assign({}, state, {
      allow_custom_subject: true
    })
  }
})

export default report
