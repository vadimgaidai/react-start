import tests from './tests'

export default ({ request, store }) => {
	const api = {}
	const modules = {
		tests,
	}
	Object.entries(modules).forEach(([key, value]) => {
		api[key] = value({ request, store })
	})
	window.$api = api
}
