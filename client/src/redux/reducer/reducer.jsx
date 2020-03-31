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
            console.log(action)
            return {
                ...state, [action.field]: action.value
            }
        default:
            return state

    }
}