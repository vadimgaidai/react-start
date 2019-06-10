import { FETCH_TEST } from './action'

const State = {
  test: []
}
export const TestReducer = (state = State, actions) => {
  switch (actions.type) {
    case FETCH_TEST:
      return {
        ...state,
        test: actions.payload
      }
    default: 
      console.log('Default state:', state)
  }
  return state
}