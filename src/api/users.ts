import { request, ResponseApi } from '../utils/fetch'

export const getUsers = (): Promise<ResponseApi> =>
  request({ url: 'https://reqres.in/api/users' })
