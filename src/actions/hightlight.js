export const changeHStatus = () => ({type: 'CHANGE_STATUS'});

export const changeStatus = () => {
	return dispatch => {
		dispatch(changeHStatus())
	}
}