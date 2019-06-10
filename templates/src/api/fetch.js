export async function FETCH(url, options) {
	let response = await fetch(url, options)
	if (response.status === 200) {
		console.log(1)
		return response.json()
	} else {
		console.log('Looks like there was a problem. Status Code: ' +
			response.status)
		return {}
	}
}
