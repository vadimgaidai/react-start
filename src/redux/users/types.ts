import { LoadingStatus, ErrorStatus } from '../currentTypes'

export enum UsersActionsType {
  LOAD_USERS = 'users/LOAD_USERS',
}

/* eslint-disable camelcase */
export interface UserType {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

export interface StateType {
  users: UserType[]
  loading: LoadingStatus
  error: ErrorStatus
}
