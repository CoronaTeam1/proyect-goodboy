const initialState = {}
export default function (state = initialState, action) {
    switch (action.type) {
        case 'REGISTER_DOG':
            return {
                ...state, [action.field]: action.value
            }
        default:
            return state

    }
}