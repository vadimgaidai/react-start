import { request } from '../utils/fetch'

export const getUsers = (): Promise<unknown> =>
  request({ url: 'https://reqres.in/api/users' })
