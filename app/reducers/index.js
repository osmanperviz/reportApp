import { combineReducers } from 'redux'
import { routerReducer } from 'react-native-redux-router'
import reportReducer from './report'
import user from './user'

const reducer = combineReducers(Object.assign({},{
   reportReducer,
   routerReducer
 }));

export default reducer
