import { combineReducers } from 'redux'
import reportReducer from './report'
import user from './user'

const reducer = combineReducers(Object.assign({},{
   reportReducer
 }));

export default reducer
