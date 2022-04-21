const initialState = {
    count: 0
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                count: state.count + 1
            }
        case 'SUB':
            return {
                count: state.count - 1
            }
    }
    return state;
}

export default rootReducer;