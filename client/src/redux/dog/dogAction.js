import {REGISTER_DOG} from './dogTypes'


export const registerDog = (field,value) =>{
    return{
        type: REGISTER_DOG,
        field: field,
        value: value
        // La accion es una funcion que devuelve un objeto (action) con las propiedades de type, field y value
    }

}

// Registramos aqui todas las acciones que tengan que ver con el usuario