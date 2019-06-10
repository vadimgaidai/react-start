import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { TestReducer } from './test/reducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  test: TestReducer
})
