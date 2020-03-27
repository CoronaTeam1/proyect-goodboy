const initialState = {slice: 0, usuario: "", perro: ""}
let next, prev

export default function (state = initialState, action) {
    switch (action.type) {
        case "NEXT":
            state.slice < 2 && (next = state.slice + 1)
            return {...state, slice: next}
        case "PREV":
            state.slice > 0 && (prev = state.slice - 1)
            return { ...state, slice: prev }
        default:
            return state

    }
}