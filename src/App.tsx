import router from './router'
import { RouterProvider } from 'react-router-dom'
import './globals.css'
function App() {
  return (
    <>
      <div className="App-header">
        <h1 className="text-3xl font-bold underline text-cyan-300">
          Hello world!
        </h1>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
