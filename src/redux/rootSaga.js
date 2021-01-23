import { all, takeEvery } from 'redux-saga/effects'
import { LOAD_USERS } from './actionTypes'

import { loadUsersSaga } from './sagas/usersSaga'

export default function* rootSaga() {
  yield all([yield takeEvery(LOAD_USERS, loadUsersSaga)])
}
