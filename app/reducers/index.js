import { combineReducers } from 'redux'
import reportReducer from './report'
import user from './report'

export default combineReducers(Object.assign({},
  reportReducer,
  user
))
