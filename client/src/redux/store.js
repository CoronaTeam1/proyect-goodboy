import {createStore} from 'redux'
import rootReducer from './rootReducer'

const store = createStore(rootReducer)

export default store

//Declaramos el store global de la app aqui y lo exportamos para app mientras asiganamos el reducer combinado al store