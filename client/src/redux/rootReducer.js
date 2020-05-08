import { combineReducers } from 'redux'
import userReducer from './user/userReducer'
import dogReducer from './dog/dogReducer'

const rootReducer = combineReducers({
    user: userReducer,
    dog: dogReducer
})

export default rootReducer
