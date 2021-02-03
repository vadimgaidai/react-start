import { all, takeEvery } from 'redux-saga/effects'
import { LOAD_USERS } from './actionTypes'

import { loadUsers } from './modules/users/saga'

export default function* rootSaga() {
  yield all([yield takeEvery(LOAD_USERS, loadUsers)])
}
