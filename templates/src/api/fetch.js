require('es6-promise').polyfill();
require('isomorphic-fetch');

export async function FETCH(url, options) {
	let response = await fetch(url, options)
	if (response.status === 200) {
		return response.json()
	} else {
		console.log('Looks like there was a problem. Status Code: ' +
			response.status)
		return {}
	}
}
