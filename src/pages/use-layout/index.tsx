import { useState, useEffect, useLayoutEffect } from 'react'
import type { FC } from 'react'
import { Button } from '../../components'
interface PageProps {}
const App: FC<PageProps> = () => {
  const [count, setCount] = useState(0)

  useLayoutEffect(() => {
    // 浏览器渲染前执行
    console.log('useLayoutEffect')
  }, [count])
  useEffect(() => {
    // 浏览器渲染后执行
    console.log('useEffect')
  }, [count])
  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>click</Button>
    </div>
  )
}
export default App
