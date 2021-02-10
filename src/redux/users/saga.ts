import { call, put, takeEvery } from 'redux-saga/effects'

import { User, UsersActionsType } from './types'
import { getUsers } from '../../api/users'
import { setUsers, setUsersErrorStatus, setUsersStateStatus } from './index'
import { LoadingStatus } from '../currentTypes'

const fetchUsers = async () => {
  const { data } = await getUsers()
  return data
}

export function* loadUsers(): Generator {
  yield put(setUsersStateStatus(LoadingStatus.LOADING))
  try {
    const payload: User[] = yield call(() => fetchUsers())
    yield put(setUsers(payload))
  } catch ({ status }) {
    yield put(setUsersErrorStatus(status))
  }
  yield put(setUsersStateStatus(LoadingStatus.LOADED))
}

export function* usersSaga(): Generator {
  yield takeEvery(UsersActionsType.LOAD_USERS, loadUsers)
}
