const initialState = {
    income: []
}

const reducer = ( state = initialState, action ) => {

    switch (action.type) {
        case 'INCOME_LOADED':
            return {
                income: action.payload
            };
        default:
            return state;
    }
}

export default reducer