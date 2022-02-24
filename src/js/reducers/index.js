import {combineReducers} from  "redux"
import {weatherReducer} from './weatherReducer'

export const rootReducers=combineReducers({weatherReducer})