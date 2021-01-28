export default ({ request }) => ({
  getUsers() {
    return request({ url: 'https://reqres.in/api/users' })
  },
})
