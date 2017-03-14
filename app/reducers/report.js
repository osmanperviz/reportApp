import createReducer from '../lib/CreateReducer'
import * as types from '../actions/types'

const report = createReducer({}, {
  [types.REPORT](state, action){
    return {new_state};
  }
})

export default report
