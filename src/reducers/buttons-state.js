const initialState = {
	shift: false,
	ctrl: false
};

export const changeBtnStatus = (state = initialState, action) => {
	let newState = {};

	switch (action.type) {
		case 'CHANGE_SHIFT_STATUS':
			newState = Object.assign({}, state, {shift: action.status});
			return newState;

		case 'CHANGE_CTRL_STATUS':
			newState = Object.assign({}, state, {ctrl: action.status});
			return newState;

		default:
			return state;
	}
}