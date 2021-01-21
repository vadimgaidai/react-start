import users from './users'

export default ({ request, store }) => {
  const api = {}
  const modules = {
    users,
  }
  Object.entries(modules).forEach(([key, value]) => {
    api[key] = value({ request, store })
  })
  window.$api = api
}
