import { takeEvery } from "redux-saga"
import { fork, put, call, select } from "redux-saga/effects"
import Api from '../lib/api'

function* watchUsersLogin() {

}

export default [
  fork(watchUsersLogin),
]
