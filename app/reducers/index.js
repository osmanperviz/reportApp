import { combineReducers } from 'redux'
import reportReducer from './report'
import user from './user'
import navReducer from './nav'

const reducer = combineReducers(Object.assign({},{
  report: reportReducer,
  nav: navReducer,
}));

export default reducer
