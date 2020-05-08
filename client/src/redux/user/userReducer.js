import {REGISTER_USER} from './userTypes'

const initialState = {
    name:'',
    username:'',
    password:'',
    checkPassword:''
}


const userReducer = (state=initialState,action) => {
    switch (action.type) {
        case REGISTER_USER:
            
            return {...state, [action.field]: action.value}
    
        default:
            return state
    }
}

export default userReducer