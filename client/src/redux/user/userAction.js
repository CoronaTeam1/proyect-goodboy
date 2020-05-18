import {REGISTER_USER,FETCH_USER,FETCH_PHOTO} from './userTypes'


export const registerUser = (field,value) =>{
    return{
        type: REGISTER_USER,
        field: field,
        value: value
    }
}

export const fetchUser = (theuser) =>{
    return{
        type: FETCH_USER,
        payload: theuser   
    }
}

export const fetchPhoto= (photoUrl) => {
    return{
        type:  FETCH_PHOTO,
        payload: photoUrl
    }
}