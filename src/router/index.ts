import { createBrowserRouter } from 'react-router-dom'

import HomePage from '../pages/home'
import UseMEmo from '../pages/use-memo'
import Memo from '../pages/memo'
import UseCallback from '../pages/use-callback'
const myRouter: any = createBrowserRouter([
  {
    path: '/',
    Component: HomePage
  },
  {
    path: 'memo',
    Component: Memo
  },
  {
    path: '/use-memo',
    Component: UseMEmo
  },
  {
    path: '/use-callback',
    Component: UseCallback
  }
])
export default myRouter
