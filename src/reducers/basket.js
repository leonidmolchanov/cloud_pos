const initialState = [
]

export default function (state=initialState, action) {
    switch (action.type) {
        case 'UPDATE_BASKET':
                basket = state
            basket.push(action.data)
            return  basket
            break
        case 'DELETE_BASKET':
            basket = state
            delete basket[action.data]
            return  basket
            break
        case 'CLEAR_BASKET':
            return  []
            break
        default:
            return state

    }
}