import  loginSaga from './usersSaga'

export default function* rootSaga() {
  yield [
    loginSaga
  ]
}
