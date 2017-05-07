const initialState = [];

export const getList = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_LIST':
            return action.list;
        default:
            return state;
    }
}