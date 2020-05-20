import {CHANGE_TERM} from './termTypes'

export const changeTerm = (value) => {
    return{
        type:CHANGE_TERM,
        value:value
    }
}