import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import users from './modules/users'
import saga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()
const middleware = [
  ...getDefaultMiddleware({
    immutableCheck: true,
    serializableCheck: true,
    thunk: false,
  }),
  sagaMiddleware,
]

const reducer = combineReducers({ users })

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
})

sagaMiddleware.run(saga)

export default store
