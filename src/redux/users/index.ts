import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoadingStatus, StateStatus } from '../currentTypes'
import { State, User } from './types'

const { actions, reducer } = createSlice({
  name: 'users',
  initialState: {
    users: [],
    stateStatus: {
      loading: LoadingStatus.NEVER,
      status: null,
    },
  } as State,
  reducers: {
    setUsers(state, { payload }: PayloadAction<Array<User>>) {
      state.users = payload
    },
    setUsersStateStatus(state, { payload }: PayloadAction<StateStatus>) {
      state.stateStatus = { ...payload }
    },
  },
})

export const { setUsers, setUsersStateStatus } = actions
export default reducer
