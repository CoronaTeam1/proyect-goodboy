import {REGISTER_USER} from './userTypes'

const initialState = {
    name:'',
    username:'',
    password:'',
    checkPassword:''
}

// declaramos el estado inicial del usuario

const userReducer = (state=initialState,action) => {
    switch (action.type) {
        case REGISTER_USER:
            
            return {...state, [action.field]: action.value}

            //Esto es como el anterior reducer
    
        default:
            return state
    }
}

export default userReducer