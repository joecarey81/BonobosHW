const products = (state = {}, action) => {
    switch (action.type) {
        // Respond to the GET_PRODUCT action and update
        // the state accordingly
        case "SET_PRODUCT":
            return {
                ...state,
                product: action.product
            }
        default:
            return state;
    }
}

export default products
