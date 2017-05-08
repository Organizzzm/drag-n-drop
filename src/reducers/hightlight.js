const initialState = {selected: false};

export const changeStatus = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_STATUS':
			let newState = Object.assign({}, state);
			return newState;
		default:
			return state;
	}
}