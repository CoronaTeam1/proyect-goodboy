import { combineReducers } from 'redux'
import userReducer from './user/userReducer'
import dogReducer from './dog/dogReducer'
import indexReducer from './index/indexReducer'
import termReducer from './term/termReducer'

const rootReducer = combineReducers({
    user: userReducer,
    dog: dogReducer,
    index: indexReducer,
    term: termReducer
})

export default rootReducer
