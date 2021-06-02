import React, { useReducer, FC } from 'react';
import { Button } from 'antd';
interface PageProps {}
let initialCount = 1;
function init(initialCount: number) {
	return { count: initialCount };
}

function reducer(state: any, action: any) {
	switch (action.type) {
		case 'increment':
			return { count: state.count + 1 };
		case 'decrement':
			return { count: state.count - 1 };
		case 'reset':
			return init(action.payload);
		default:
			throw new Error();
	}
}
const App: FC<PageProps> = () => {
	const [state, dispatch] = useReducer(reducer, initialCount, init);
	return (
		<div>
			<h1 className="page-title">useReducer</h1>
			<h2>useReducer 类似于 redux 的reducer，适合用来做单个页面的数据管理</h2>
			<h1 className="result">{state.count}</h1>
			<Button onClick={() => dispatch({ type: 'decrement' })}>-</Button>
			<Button onClick={() => dispatch({ type: 'increment' })}>+</Button>
		</div>
	);
};
export default App;
