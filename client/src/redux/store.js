import { createStore } from 'redux'
import rootReducer from './rootReducer'

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store

//Declaramos el store global de la app aqui y lo exportamos para app mientras asiganamos el reducer combinado al store
//El segundo argumento del store, es la extension de chrome para controlar el estado de Redux