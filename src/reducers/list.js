const initialState = {
	lastItem: null,
	list: []
};

export const getList = (state = initialState, action) => {
	let newState = {};
	let newArray = [];

	switch (action.type) {
		case 'GET_LIST':
			newState = Object.assign({}, {list: action.list});
			return newState;

		case 'CHANGE':
			newArray = state.list.map((item, i) => {
				if (i == action.id) {
					item = {
						name: item.name,
						desc: item.desc,
						selected: item.selected == 'false' || !item.selected ? 'true' : 'false'
					}
				}
				return item;
			});

			newState = Object.assign({}, {list: newArray}, {lastItem: action.id});

			return newState;

		case 'CHANGE_ALL':
			newArray = state.list.map((item, i) => {
				if (i == action.id) {
					item = {
						name: item.name,
						desc: item.desc,
						selected: item.selected == 'false' || !item.selected ? 'true' : 'false'
					}
				} else {
					item = {
						name: item.name,
						desc: item.desc,
						selected: 'false'
					}
				}
				return item;
			});

			newState = Object.assign({}, {list: newArray}, {lastItem: action.id});

			return newState;

		case 'CHANGE_SHIFT':
			let flag = false;

			newArray = state.list.map((item, i) => {
				if (flag) {
					item = {
						name: item.name,
						desc: item.desc,
						selected: 'true'
					}
				} else {
					item = {
						name: item.name,
						desc: item.desc,
						selected: 'false'
					}
				}

				if (i == action.id || i == state.lastItem) {
					item = {
						name: item.name,
						desc: item.desc,
						selected: 'true'
					};

					flag = !flag;
				}

				return item;
			});

			newState = Object.assign({}, state, {list: newArray});

			return newState;

		case 'CLEAR_ALL':
			newArray = state.list.map((item, i) => {
				item = {
					name: item.name,
					desc: item.desc,
					selected: false
				};

				return item;
			});

			newState = Object.assign({}, {list: newArray}, {lastItem: null});

			return newState;

		default:
			return state;
	}
}