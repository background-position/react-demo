import { createBrowserRouter } from 'react-router-dom'

import HomePage from '../pages/home'
import UseMEmo from '../pages/use-memo'
import UseCallback from '../pages/use-callback'
const myRouter: any = createBrowserRouter([
  {
    path: '/',
    Component: HomePage
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
