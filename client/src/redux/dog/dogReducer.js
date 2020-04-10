import {REGISTER_DOG} from './dogTypes'

const initialState = {
    name:'',
    age:'',
    breed:'',
    genre:'',
    photo:''
}

// declaramos el estado inicial del usuario

const dogReducer = (state=initialState,action) => {
    switch (action.type) {
        case REGISTER_DOG:
            
            return {...state, [action.field]: action.value}

            //Esto es como el anterior reducer
    
        default:
            return state
    }
}

export default dogReducer