import { REGISTER_DOG, SET_DOG } from './dogTypes'


export const registerDog = (field, value) => {
    return {
        type: REGISTER_DOG,
        field: field,
        value: value
    }

}
export const setDog = () => {
    return {
        type: SET_DOG,
    }
}
