import loginSaga from './loginSaga'
import reportSaga from './reportSaga'

export default function* rootSaga() {
  yield [
    loginSaga,
    reportSaga
  ]
}
