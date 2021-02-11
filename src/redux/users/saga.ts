import { call, put, takeLatest } from 'redux-saga/effects'

import { fetchUsers } from '../../api/users'
import { LoadingStatus } from '../currentTypes'
import { UsersActionsType } from './types'

import { setUsers, setUsersErrorStatus, setUsersLoadingStatus } from './index'

export function* loadUsers(): Generator {
  try {
    yield put(setUsersLoadingStatus(LoadingStatus.LOADING))
    const payload: ReturnType<typeof Object> = yield call(fetchUsers)
    yield put(setUsers(payload))
    yield put(setUsersErrorStatus(null))
  } catch ({ status }) {
    yield put(setUsersLoadingStatus(LoadingStatus.ERROR))
    yield put(setUsersErrorStatus(status))
  }
}

export function* usersSaga(): Generator {
  yield takeLatest(UsersActionsType.LOAD_USERS, loadUsers)
}
