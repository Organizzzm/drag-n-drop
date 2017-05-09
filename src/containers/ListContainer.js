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
	shiftKeyHandlerUp: () => dispatch({type: 'CHANGE_SHIFT_STATUS', status: false}),

	mouseDown: (e) => {
		if (!e.target.closest('.document')) {
			dispatch({type: 'CLEAR_ALL'});
		}
		else if (e.target.closest('.document').dataset.selected == 'true') {
			const elms = document.querySelectorAll('[data-selected="true"]');
//////////////////////////////////////////////////////////////////////////////////////

			// let animate = true;
			//
			// elms.forEach((item) => {
			// 	item.style.left = item.getBoundingClientRect().left + 'px';
			// 	item.style.top = item.getBoundingClientRect().top + 'px';
			// });

			document.onmousemove = (e) => {

				elms.forEach((item) => {
					// Create avatar

					item.style.position = 'absolute';

					item.style.left = e.pageX + 'px';
					item.style.top = e.pageY + 'px';
				});

				// if (animate) {
				//
				// }

				// elms.forEach((item) => {
				// 	// item.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
				//
				// 	item.style.position = 'absolute';
				//
				// 	item.style.left = e.pageX + 'px';
				// 	item.style.top = e.pageY + 'px';
				// });
			};

			document.onmouseup = (e) => {
				document.onmousemove = null;
				document.onmouseup = null;
			}
		}


		function animate(options) {

			var start = performance.now();

			requestAnimationFrame(function animate(time) {
				// timeFraction от 0 до 1
				var timeFraction = (time - start) / options.duration;
				if (timeFraction > 1) timeFraction = 1;

				// текущее состояние анимации
				var progress = options.timing(timeFraction)

				options.draw(progress);

				if (timeFraction < 1) {
					requestAnimationFrame(animate);
				}

			});
		}

//////////////////////////////////////////////////////////////////////////////////////////
		// console.log(e)
	}
});


const ListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(List);

export default ListContainer;

