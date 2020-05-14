export default ({ load }) => ({
	async GetTests() {
		return load({ url: 'https://reqres.in/api/users' })
	},
})
