import React from "react";

import Document from './Document';

// app component
export default class List extends React.Component {
    componentDidMount() {
        this.props.getList()
    }

    render() {
        return (
            <div className="list">
                {
                    this.props.list.map(item => <Document key={Math.random()} title={item.name} desc={item.desc}/>)
                }
            </div>
        )
    }
}