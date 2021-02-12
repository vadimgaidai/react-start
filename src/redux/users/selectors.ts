import { LoadingStatus, ErrorStatus } from '../currentTypes'
import { RootState } from '../store'
import { StateType, UserType } from './types'

export const selectUsersState = (state: RootState): StateType => state.users

export const selectUsers = (state: RootState): UserType[] =>
  selectUsersState(state).users

export const selectIsUsersLoadedError = (state: RootState): boolean =>
  selectUsersState(state).loading === LoadingStatus.ERROR

export const selectErrorStatus = (state: RootState): ErrorStatus =>
  selectUsersState(state).error
