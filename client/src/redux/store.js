import { configureStore,combineReducers } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import brandReducer from "./brandsSlice"
import colorReducer from "./colorSlice"
import currentReducer from "./current"
import locationReducer from "./location"
import numReducer from "./num"
import storage from 'redux-persist/lib/storage'
import searchReducer from "./search"
import targetConvReducer from "./targetConv"
import adsReducer from "./ads"
import conversationSlice from "./conversation"
import autosConditionSlice from "./autoscondition"
import notificationSlice from './notification'
import {
  persistStore,
  persistReducer,
} from 'redux-persist'
const persistConfig = {
  key: 'root',
  version: 1,
  storage
}
const rootReducer=combineReducers({user:userReducer,autoscondition:autosConditionSlice,notificationName:notificationSlice,brand:brandReducer,color:colorReducer,conversation:conversationSlice,current:currentReducer,num:numReducer,ads:adsReducer,location:locationReducer,search:searchReducer,targetConv:targetConvReducer})
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer:persistedReducer, middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false
  }),
})
export const persistor=persistStore(store)