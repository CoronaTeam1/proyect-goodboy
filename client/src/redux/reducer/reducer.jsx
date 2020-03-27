const initialState = {count: 0, usuario: "", perro: ""}

export default function (state = initialState, action) {
    switch (action.type) {
        case "more":
            let newValue = state.count + action.payload
            return {...state, count: newValue}
        case "less":
            let value = state.count - action.payload
            return { ...state, count: value }
        default:
            return state

    }
}