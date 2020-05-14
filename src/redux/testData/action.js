import { LOAD_TEST_DATA } from '../actionTypes'

export const getTestData = ({ data }) => {
	return {
		type: LOAD_TEST_DATA,
		data,
	}
}

export const loadTestData = () => {
	const { $api } = window
	return async (dispatch) => {
		try {
			const { data } = await $api.tests.GetTests()
			dispatch(getTestData(data))
		} catch {}
	}
}
