import { request } from '../utils/fetch'
import users from './modules/users'

const api = {}
const modules = {
  users,
}
Object.entries(modules).forEach(([key, value]) => {
  api[key] = value({ request })
})

export default api
