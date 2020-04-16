import { REGISTER_DOG, SET_DOG } from './dogTypes'

const initialState = {
    name: '',
    age: '',
    breed: '',
    genre: '',
    photo: ''
}

// declaramos el estado inicial del usuario

const dogReducer = (state = initialState, action) => {

    switch (action.type) {
        //Esto es como el anterior reducer
        case REGISTER_DOG:

            return { ...state, [action.field]: action.value }

        case SET_DOG:

            return {
                ...state,
                name: '', age: '', breed: '', genre: '', photo: ''
            }

        default:
            return state
    }
}

export default dogReducer