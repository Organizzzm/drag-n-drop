import { connect } from 'react-redux';
import React from "react";

import List from '../components/List';
import { loadList } from '../actions/load-list';

const mapStateToProps = (state) => ({
    list: state.list
});

const mapDispatchToProps = dispatch => ({
    getList: () => dispatch(loadList()),
    dropSelect: () => dispatch({type: 'CLEAR_ALL'}),

    keyHandlerDown: () => dispatch({type: 'CHANGE_CTRL_STATUS', status: true}),
    shiftKeyHandlerDown: () => dispatch({type: 'CHANGE_SHIFT_STATUS', status: true}),

    keyHandlerUp: () => dispatch({type: 'CHANGE_CTRL_STATUS', status: false}),
    shiftKeyHandlerUp: () => dispatch({type: 'CHANGE_SHIFT_STATUS', status: false})
});

const ListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(List);

export default ListContainer;

