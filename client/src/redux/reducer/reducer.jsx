const initialState = { count: 0, usuario: "", perro: "" }
export default function (state = initialState, action) {
    switch (action.type) {
        case "more":
            let newValue = state.count + action.payload
            return { ...state, count: newValue }
        case "less":
            let value = state.count - action.payload
            return { ...state, count: value }
        case 'REGISTER_DOG':
            return {
                ...state, dogName: action.payload.dogname, dogAge: action.payload.dogage, dogBreed: action.payload.dogbreed
            }
        default:
            return state

    }
}