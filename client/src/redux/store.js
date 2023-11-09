import { configureStore,combineReducers } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import currentReducer from "./current"
import locationReducer from "./location"
import storage from 'redux-persist/lib/storage'
import searchReducer from "./search"
import adsReducer from "./ads"
import conversationSlice from "./conversation"
import {
  persistStore,
  persistReducer,
} from 'redux-persist'
const persistConfig = {
  key: 'root',
  version: 1,
  storage
}
const rootReducer=combineReducers({user:userReducer,conversation:conversationSlice,current:currentReducer,ads:adsReducer,location:locationReducer,search:searchReducer})
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer:persistedReducer, middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false
  }),
})
export const persistor=persistStore(store)