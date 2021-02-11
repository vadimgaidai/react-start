import { User } from '../redux/users/types'
import { request, ResponseApi } from '../utils/fetch'

export const fetchUsers = async (): Promise<User[]> => {
  const { payload }: ResponseApi = await request({
    url: 'https://reqres.in/api/users',
  })
  return payload
}
