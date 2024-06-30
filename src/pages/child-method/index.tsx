import { useState, useEffect, useRef } from 'react'
import { Button } from '../../components'
import Child from './components/child'
import type { FC } from 'react'
interface PageProps {}
interface IChild {
  focus: () => void
}
const App: FC<PageProps> = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {}, [])
  const ref = useRef<IChild>(null)
  return (
    <div>
      demo
      <Child count={count} setCount={setCount} ref={ref} />
      <div>
        <Button
          onClick={() => {
            ref.current?.focus()
          }}
        >
          {' '}
          click
        </Button>
      </div>
    </div>
  )
}
export default App
