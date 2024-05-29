import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Page3 from './pages/page3'
import Page4 from './pages/page4'
import Page5 from './pages/page5'
import Page6 from './pages/page6'
import Page7 from './pages/page7'
import Page8 from './pages/page8'
import Page11 from './pages/page11'
import MyRedux from './mini-redux'
function App() {
  return (
    <BrowserRouter>
      {/* <Route path="/page1" component={Page1}>
        page1
      </Route>
      <Route path="/page2" component={Page2} />
      <Route path="/page3" component={Page3} />
      <Route path="/page4" component={Page4} />
      <Route path="/page5" component={Page5} />
      <Route path="/page6" component={Page6} />
      <Route path="/page7" component={Page7} /> */}
      <Route path="/page8" component={Page11} />
      {/* <Link to="/page1">page1</Link>
      <Link to="/page2">page2</Link>
      <Link to="/page3">page3</Link>
      <Link to="/page4">page4</Link>
      <Link to="/page5">page5</Link>
      <Link to="/page6">page6</Link>
      <Link to="/page7">page7</Link> */}
      <Link to="/page8">page8</Link>
    </BrowserRouter>
  )
}

export default App
