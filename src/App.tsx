import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Page1 from './page1'
import Page2 from './page2'
import Page3 from './page3'
import Page4 from './page4'
import Page5 from './page5'
import Page6 from './page6'
import Page7 from './page7'
import Page8 from './page8'
import MyRedux from './mini-redux'
function App() {
  return (
    <MyRedux>
      <BrowserRouter>
        <Route path="/page1" component={Page1}>
          page1
        </Route>
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
        <Route path="/page4" component={Page4} />
        <Route path="/page5" component={Page5} />
        <Route path="/page6" component={Page6} />
        <Route path="/page7" component={Page7} />
        <Route path="/page8" component={Page8} />
        <Link to="/page1">page1</Link>
        <Link to="/page2">page2</Link>
        <Link to="/page3">page3</Link>
        <Link to="/page4">page4</Link>
        <Link to="/page5">page5</Link>
        <Link to="/page6">page6</Link>
        <Link to="/page7">page7</Link>
        <Link to="/page8">page8</Link>
      </BrowserRouter>
    </MyRedux>
  )
}

export default App
