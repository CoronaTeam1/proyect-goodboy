const initialState = {}

export default function (state = initialState, action) {

    switch (action.type) {
        case "ji":
            return {
                ...state
            };
        default:
            return {
                ...state
            }

    }
}