import { LoadingStatus, StateStatus } from '../currentTypes'
import { RootState } from '../store'
import { State, User } from './types'

export const selectUsersState = (state: RootState): State => state.users

export const selectUsers = (state: RootState): User[] =>
  selectUsersState(state).users

export const selectLoadingStatus = (state: RootState): StateStatus =>
  selectUsersState(state).stateStatus

export const selectIsUsersLoading = (state: RootState): boolean =>
  selectLoadingStatus(state).loading === LoadingStatus.LOADING

export const selectIsUsersLoaded = (state: RootState): boolean =>
  selectLoadingStatus(state).loading === LoadingStatus.LOADED

export const selectIsUsersErrorLoaded = (state: RootState): boolean =>
  selectLoadingStatus(state).loading === LoadingStatus.ERROR
