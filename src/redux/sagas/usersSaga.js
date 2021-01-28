import { call, put } from 'redux-saga/effects'
import api from '../../api'
import { setUsers } from '../modules/users'

const loadUsers = async () => {
  const { data } = await api.users.getUsers()
  return data
}

export function* loadUsersSaga() {
  try {
    const { data } = yield call(() => loadUsers())
    yield put(setUsers(data))
  } catch (e) {
    console.error(e)
  }
}
