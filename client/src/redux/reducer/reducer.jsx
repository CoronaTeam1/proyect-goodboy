const initialState = {
    user:[{
        name:'',
        username:'',
        password:'',
    }]
}


export default function (state = initialState, action) {
    const test = {...state}
    switch (action.type) {
        case 'REGISTER_DOG':
            console.log(state,action)
            const dog = {}
            return {
                ...state, [action.field]: action.value //Esto peta
            }
        // case 'REGISTER_USER':
        //     console.log(test)
        //     console.log(action)
            
        //     return {
        //         ...state, user:[...state.user.action.field:action.value],
        //     }
        default:
            return state 

    }
}