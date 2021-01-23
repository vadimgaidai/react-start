import { createSlice } from '@reduxjs/toolkit'

const { actions, reducer } = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    setUsers(state, { payload }) {
      state.users = payload?.data
    },
  },
})

export const { setUsers } = actions
export default reducer
