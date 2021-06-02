import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4';
import Page5 from './page5';
import './mock/data1';
import './mock';
class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Route path="/page1" component={Page1} />
				<Route path="/page2" component={Page2} />
				<Route path="/page3" component={Page3} />
				<Route path="/page4" component={Page4} />
				<Route path="/page5" component={Page5} />
			</BrowserRouter>
		);
	}
}

export default App;
