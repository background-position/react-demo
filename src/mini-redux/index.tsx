import React, { createContext, FC } from 'react';
import { useMiniRedux } from '../hooks/redux-hook';
interface PageProps {}
interface test {
	state: any;
	dispatch: any;
}
export const MyRedux = createContext<test>({
	state: {},
	dispatch: () => {},
});
const App: FC<PageProps> = (props) => {
	const { state, dispatch } = useMiniRedux();
	return (
		<MyRedux.Provider
			value={{
				state,
				dispatch,
			}}
		>
			{props.children}
		</MyRedux.Provider>
	);
};
export default App;
