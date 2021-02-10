import { call, put, takeLatest } from 'redux-saga/effects'

import { getUsers } from '../../api/users'
import { LoadingStatus } from '../currentTypes'
import { UsersActionsType } from './types'

import { setUsers, setUsersErrorStatus, setUsersLoadingStatus } from './index'
import { ResponseApi } from '../../utils/fetch'

const fetchUsers = async (): Promise<ResponseApi> => {
  const { data }: ResponseApi = await getUsers()
  return data
}

export function* loadUsers(): Generator {
  yield put(setUsersLoadingStatus(LoadingStatus.LOADING))
  try {
    const { data }: ReturnType<typeof Object> = yield call(fetchUsers)
    yield put(setUsers(data))
  } catch ({ status }) {
    yield put(setUsersErrorStatus(status))
  }
  yield put(setUsersLoadingStatus(LoadingStatus.LOADED))
}

export function* usersSaga(): Generator {
  yield takeLatest(UsersActionsType.LOAD_USERS, loadUsers)
}
