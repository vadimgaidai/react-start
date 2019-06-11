import { FETCH_TEST } from './action'

const State = {
  user: []
}
export const TestReducer = (state = State, actions) => {
  switch (actions.type) {
    case FETCH_TEST:
      return {
        ...state,
        user: actions.payload
      }
    default: 
      console.log('Default state:', state)
  }
  return state
}