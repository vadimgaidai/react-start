import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoadingStatus, ErrorStatus } from '../currentTypes'
import { State, User } from './types'

const { actions, reducer } = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: LoadingStatus.NEVER,
    error: null,
  } as State,
  reducers: {
    setUsers(state, { payload }: PayloadAction<Array<User>>) {
      state.users = payload
    },
    setUsersStateStatus(state, { payload }: PayloadAction<LoadingStatus>) {
      state.loading = payload
    },
    setUsersErrorStatus(state, { payload }: PayloadAction<ErrorStatus>) {
      state.error = payload
    },
  },
})

export const { setUsers, setUsersStateStatus, setUsersErrorStatus } = actions
export default reducer
