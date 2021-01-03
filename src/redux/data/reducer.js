import { LOAD_DATA } from '../actionTypes'

const initialState = {
	data: [],
}

export const testReducer = (state = initialState, { type, data }) => {
	switch (type) {
		case LOAD_DATA: {
			return {
				...state,
				data,
			}
		}
		default:
			return state
	}
}
