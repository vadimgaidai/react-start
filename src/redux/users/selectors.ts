import { LoadingStatus, ErrorStatus } from '../currentTypes'
import { RootState } from '../store'
import { State, User } from './types'

export const selectUsersState = (state: RootState): State => state.users

export const selectUsers = (state: RootState): User[] =>
  selectUsersState(state).users

export const selectLoadingStatus = (state: RootState): LoadingStatus =>
  selectUsersState(state).loading

export const selectIsUsersLoading = (state: RootState): boolean =>
  selectLoadingStatus(state) === LoadingStatus.LOADING

export const selectIsUsersLoaded = (state: RootState): boolean =>
  selectLoadingStatus(state) === LoadingStatus.LOADED

export const selectIsUsersErrorLoaded = (state: RootState): boolean =>
  selectLoadingStatus(state) === LoadingStatus.ERROR

export const selectErrorStatus = (state: RootState): ErrorStatus =>
  selectUsersState(state).error
