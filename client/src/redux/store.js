import { createStore } from 'redux'
import rootReducer from './rootReducer'

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store

//Segundo argumento de CreateStore extension de chrome para controlar el estado.