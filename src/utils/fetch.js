import merge from 'lodash/merge'

const optionsDefault = {
	'Content-Type': 'application/json',
}

const JWT = async () => {
	const expiredIn = localStorage.getItem('expires_in')
	const accessToken = localStorage.getItem('access_token')
	const isExpired = !expiredIn || expiredIn < Date.now() / 1000
	if (isExpired) {
		return localStorage.getItem('access_token')
	}
	return accessToken
}

export const load = async ({ url, method = 'GET', options, jwt = false }) => {
	const response = await fetch(url, {
		method,
		mode: 'cors',
		headers: jwt
			? merge(
					{ Authorization: `Bearer ${await JWT()}` },
					options ?? optionsDefault
			  )
			: options ?? optionsDefault,
	})
	return response.ok
		? {
				data: await response.json(),
				request: response,
		  }
		: Promise.reject(response)
}

export const send = async ({
	url,
	data,
	options,
	method = 'POST',
	jwt = false,
}) => {
	const response = await fetch(url, {
		method,
		body: JSON.stringify(data),
		headers: jwt
			? merge(
					{ Authorization: `Bearer ${await JWT()}` },
					options ?? optionsDefault
			  )
			: options ?? optionsDefault,
	})
	return response.ok
		? {
				data: await response.json(),
				request: response,
		  }
		: Promise.reject(response)
}
