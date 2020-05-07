import {REGISTER_USER,FETCH_USER} from './userTypes'


export const registerUser = (field,value) =>{
    return{
        type: REGISTER_USER,
        field: field,
        value: value
        // La accion es una funcion que devuelve un objeto (action) con las propiedades de type, field y value
    }
}

export const fetchUser = (theuser) =>{
    return{
        type: FETCH_USER,
        payload: theuser
        
    }

}

// Registramos aqui todas las acciones que tengan que ver con el usuario