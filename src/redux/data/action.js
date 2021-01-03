import { LOAD_DATA } from '../actionTypes'

export const getData = ({ data }) => {
	return {
		type: LOAD_DATA,
		data,
	}
}

export const loadData = () => {
	const { $api } = window
	return async (dispatch) => {
		try {
			const { data } = await $api.tests.GetTests()
			dispatch(getData(data))
		} catch {}
	}
}
