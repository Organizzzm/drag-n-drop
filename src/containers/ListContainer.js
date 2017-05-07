import { connect } from 'react-redux';
import React from "react";

import List from '../components/List';

import { loadList } from '../actions/load-list';

const mapStateToProps = (state) => ({
    list: state.list
});

const mapDispatchToProps = dispatch => ({
    getList: () => dispatch(loadList())

});

const ListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(List);

export default ListContainer;

