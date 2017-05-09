import { connect } from 'react-redux';
import React from "react";

import Document from '../components/Document';

const mapStateToProps = ({changeBtn}) => ({
	shift: changeBtn.shift,
	ctrl: changeBtn.ctrl
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
	const {dispatch} = dispatchProps;
	const {ctrl} = stateProps;

	return {
		...ownProps,
		change: () => {
			if (ctrl)
				dispatch({type: 'CHANGE', id: ownProps.id});
			else if (stateProps.shift)
				dispatch({type: 'CHANGE_SHIFT', id: ownProps.id});
			else
				dispatch({type: 'CHANGE_ALL', id: ownProps.id});
		}
	};
};

const DocumentContainer = connect(
	mapStateToProps,
	null,
	mergeProps
)(Document);

export default DocumentContainer;