import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoadingStatus, ErrorStatus } from '../currentTypes'
import { StateType, UserType } from './types'

const { actions, reducer } = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: LoadingStatus.NEVER,
    error: null,
  } as StateType,
  reducers: {
    setUsers(state: StateType, { payload }: PayloadAction<UserType[]>) {
      state.users = payload
      state.loading = LoadingStatus.LOADED
    },
    setUsersLoadingStatus(
      state: StateType,
      { payload }: PayloadAction<LoadingStatus>
    ) {
      state.loading = payload
    },
    setUsersErrorStatus(
      state: StateType,
      { payload }: PayloadAction<ErrorStatus>
    ) {
      state.error = payload
    },
  },
})

export const { setUsers, setUsersLoadingStatus, setUsersErrorStatus } = actions
export default reducer
