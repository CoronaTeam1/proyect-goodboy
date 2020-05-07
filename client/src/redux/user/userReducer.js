import {REGISTER_USER,FETCH_USER} from './userTypes'

const initialState = {
    name:'',
    username:'',
    password:'',
    checkPassword:'',
    dog:{},
}

// declaramos el estado inicial del usuario

const userReducer = (state=initialState,action) => {
    switch (action.type) {
        case REGISTER_USER:
            
            return {...state, [action.field]: action.value}

            //Esto es como el anterior reducer
        case FETCH_USER:
            const newState = {...state}
            newState.name=action.payload.name
            newState.username=action.payload.username
            newState.dog=action.payload.dog
            newState.password=action.payload.password
            return {...newState}

        default:
            return state
    }
}

export default userReducer