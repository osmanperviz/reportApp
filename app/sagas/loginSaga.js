import { fork, put, call, select, takeEvery } from "redux-saga/effects"
import Api from '../lib/Api'

function* watchUsersLogin() {
  // __DEV__ && console.info("Waiting for login")
  //  yield* takeEvery('some', doe)
}

export default [
  fork(watchUsersLogin),
]
