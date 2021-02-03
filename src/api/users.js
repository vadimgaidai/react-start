import { request } from '../utils/fetch'

export function getUsers() {
  return request({ url: 'https://reqres.in/api/users' })
}
