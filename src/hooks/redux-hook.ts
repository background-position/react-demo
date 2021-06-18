import React, { useReducer } from 'react';
const initialState = {
	count: 1,
};
const init = function (state: any) {
	return state;
};
const reducer = function (state: any, action: any) {
	switch (action.type) {
		case 'add':
			return {
				...state,
				count: state.count + 1,
			};
		default:
			return init(initialState);
	}
};
export function useMiniRedux() {
	const [state, dispatch] = useReducer(reducer, initialState, init);
	return {
		state,
		dispatch,
	};
}
