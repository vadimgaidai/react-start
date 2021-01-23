import { call, put } from 'redux-saga/effects'
import { setUsers } from '../modules/users'

const loadUsers = async () => {
  const payload = await window.$api.users.getUsers()
  return payload
}

export function* loadUsersSaga() {
  try {
    const { data } = yield call(() => loadUsers())
    yield put(setUsers(data))
  } catch (e) {
    console.error(e)
  }
}
