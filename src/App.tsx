import router from './router'
import { RouterProvider } from 'react-router-dom'
import './globals.css'
const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
