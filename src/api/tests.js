export default ({ request }) => ({
	async GetTests() {
		return request({ url: 'https://reqres.in/api/users' })
	},
})
