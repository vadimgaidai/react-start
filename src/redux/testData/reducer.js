import { LOAD_TEST_DATA } from '../actionTypes'

const initialState = {
	testData: [],
}

export const testReducer = (state = initialState, { type, data }) => {
	switch (type) {
		case LOAD_TEST_DATA: {
			return {
				...state,
				testData: data,
			}
		}
		default:
			return state
	}
}
