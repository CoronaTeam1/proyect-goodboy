import {CHANGE_TERM} from './termTypes'

const initialState = {
    term:'/home'
}

const termReducer = (state=initialState,action) => {
    switch (action.type) {
        case CHANGE_TERM:
            return {...state, term:action.value}
    default:
        return state
    }

}

export default termReducer