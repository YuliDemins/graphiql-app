import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { api } from '@/store/services'

import { themeReducer } from './slices'

const reducers = {
  slice: themeReducer,
  [api.reducerPath]: api.reducer,
}

export const reducer = combineReducers(reducers)

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})
