import tests from './tests'

export default ({ load, send, store }) => {
	const api = {}
	const modules = {
		tests,
	}
	Object.entries(modules).forEach(([key, value]) => {
		api[key] = value({ load, send, store })
	})
	window.$api = api
}
