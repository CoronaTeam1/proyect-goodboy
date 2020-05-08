import {REGISTER_USER} from './userTypes'


export const registerUser = (field,value) =>{
    return{
        type: REGISTER_USER,
        field: field,
        value: value
    }

}