import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Page1 from './page1'
import Page2 from './page2'
import Page3 from './page3'
import Page4 from './page4'
import Page5 from './page5'
import Page6 from './page6'
import Page7 from './page7'
import MyRedux from './mini-redux'
function App() {
  return (
    <MyRedux>
      <BrowserRouter>
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
        <Route path="/page4" component={Page4} />
        <Route path="/page5" component={Page5} />
        <Route path="/page6" component={Page6} />
        <Route path="/page7" component={Page7} />
      </BrowserRouter>
    </MyRedux>
  )
}

export default App
