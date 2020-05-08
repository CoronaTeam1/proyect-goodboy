import { combineReducers } from 'redux'
import userReducer from './user/userReducer'
import dogReducer from './dog/dogReducer'
import indexReducer from './index/indexReducer'

const rootReducer = combineReducers({
    user: userReducer,
    dog: dogReducer,
    index: indexReducer
})

export default rootReducer
