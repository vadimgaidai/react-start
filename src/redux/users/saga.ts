import { call, put, takeEvery } from 'redux-saga/effects'

import { User, UsersActionsType } from './types'
import { getUsers } from '../../api/users'
import { setUsers, setUsersStateStatus } from './index'
import { LoadingStatus } from '../currentTypes'

const fetchUsers = async () => {
  const { data }: any = await getUsers()
  return data
}

export function* loadUsers(): Generator {
  try {
    yield put(setUsersStateStatus({ loading: LoadingStatus.LOADING }))
    const payload: User[] | any = yield call(() => fetchUsers())
    yield put(setUsers(payload))
    yield put(
      setUsersStateStatus({ loading: LoadingStatus.LOADED, status: 200 })
    )
  } catch ({ status }) {
    yield put(setUsersStateStatus({ loading: LoadingStatus.ERROR, status }))
  }
}

export function* usersSaga(): Generator {
  yield takeEvery(UsersActionsType.LOAD_USERS, loadUsers)
}
