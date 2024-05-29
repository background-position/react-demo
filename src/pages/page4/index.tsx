import React, { useState, useContext, FC } from 'react';
interface PageProps {}
interface ChildProps {
	count: number;
}
const MyContext = React.createContext({});
const Child1 = (props: any) => {
	const { count } = useContext<any>(MyContext);
	return (
		<div>
			<p>Child</p>
			<p>{count}</p>
		</div>
	);
};
const Child2 = (props: any) => {
	return <div>Child1</div>;
};
const App: FC<PageProps> = () => {
	const [count, setCount] = useState<number>(1);
	return (
		<div>
			<h1 className="page-title">useContext</h1>
			<h2>useContext </h2>
			<h2>接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值</h2>
			<h2>当前的 context 值由上层组件中距离当前组件最近的 的 value prop 决定</h2>
			<h2>
				当组件上层最近的 更新时，该 Hook 会触发重渲染，并使用最新传递给 MyContext provider 的 context value 值
			</h2>
			<h1 className="result"></h1>
			<MyContext.Provider
				value={{
					a: 1,
					count,
					setCount,
				}}
			>
				<div>
					<Child1></Child1>
					<Child2></Child2>
				</div>
			</MyContext.Provider>
		</div>
	);
};
export default App;
