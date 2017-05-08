import React from "react";

import DocumentContainer from '../containers/DocumentContainer';

export default class List extends React.Component {
	componentDidMount() {
		this.props.getList();

		addEventListener("keydown", (e) => {
			if(e.keyCode == 17)
				this.props.keyHandlerDown(e);

			if(e.keyCode == 16)
				this.props.shiftKeyHandlerDown(e);
		});

		addEventListener("keyup", (e) => {
			if(e.keyCode == 17)
				this.props.keyHandlerUp(e);

			if(e.keyCode == 16)
				this.props.shiftKeyHandlerUp(e);
		});
	}

	clickHandler(e){
		if(!e.target.closest('.document'))
			this.props.dropSelect()
	}

	render() {
		return (
			<div className="list" onClick={this.clickHandler.bind(this)}>
				{
					this.props.list.list.map((item, i) => <DocumentContainer key={Math.random()}
																															title={item.name}
																															desc={item.desc}
																															selected={item.selected}
																															id={i}/>)
				}
			</div>
		)
	}
}