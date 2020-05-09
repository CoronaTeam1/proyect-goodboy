import { REGISTER_INDEX } from './indexTypes'

const initialState = {
    index: 0
}

const indexReducer = (state = initialState, action) => {

    switch (action.type) {

        case REGISTER_INDEX:
            return { ...state, index: action.value }

        default:
            return state
    }
}

export default indexReducer