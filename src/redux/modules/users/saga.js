import { call, put } from 'redux-saga/effects'
import { getUsers } from '../../../api/users'

import { setUsers } from './index'

const fetchUsers = async () => {
  const { data } = await getUsers()
  return data
}

export function* loadUsers() {
  try {
    const { data } = yield call(() => fetchUsers())
    yield put(setUsers(data))
  } catch (e) {
    console.error(e)
  }
}
