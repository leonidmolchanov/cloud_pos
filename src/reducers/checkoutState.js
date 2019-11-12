const initialState = false

export default function (state=initialState, action) {
    switch (action.type) {
        case 'UPDATE_BASKET':
            return  true
            break
        case 'DELETE_BASKET':
            return  false
            break
        default:
            return state

    }
}