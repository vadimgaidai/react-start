import { StateStatus } from '../currentTypes'

export enum UsersActionsType {
  LOAD_USERS = 'users/LOAD_USERS',
}

/* eslint-disable camelcase */
export interface User {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

export interface State {
  users: User[]
  stateStatus: StateStatus
}
