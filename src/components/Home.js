import React from "react";

import Header from './Header';
import ListContainer from '../containers/ListContainer';

// Home page component
export default class Home extends React.Component {
    // render
    render() {
        return (
            <div className="page-home">
                <Header />
                <ListContainer />
            </div>
        );
    }
}
