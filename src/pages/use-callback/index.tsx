import { useState, useCallback, useEffect, FC } from 'react'
interface PageProps {}

const CHild: FC<{ onCountChange: () => void }> = (props) => {
  return (
    <div>
      <h1>{Math.random()}</h1>
      <button onClick={props.onCountChange}> click</button>
    </div>
  )
}
const CHild2: FC<{ onCountChange: () => void }> = (props) => {
  return (
    <div>
      <h1>{Math.random()}</h1>
      <button onClick={props.onCountChange}> click</button>
    </div>
  )
}
const App: FC<PageProps> = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [curTime, setCurTime] = useState('')
  const useTime = () => {
    useEffect(() => {
      const intervalId = window.setInterval(() => {
        const time = new Date()
        setCurTime(time.toLocaleString())
      }, 1000)
      return () => {
        window.clearInterval(intervalId)
      }
    }, [])
    return curTime
  }
  const time = useTime()
  const onCountChange = () => {
    setCount((count) => count + 100)
  }
  const onCountChange2 = useCallback(() => {
    setCount2((count) => count + 100)
  }, [])
  return (
    <div>
      <h1>{time}</h1>
      <h1>{count}</h1>
      <h1>{count2}</h1>
      {/* 
        没有使用 useCallback 时，每次点击按钮，都会重新渲染 CHild 组件
        onCountChange函数会重新创建，导致 CHild 组件重新渲染
      */}
      <CHild onCountChange={onCountChange} />
      {/* 
        使用 useCallback 时，只有 count 变化时，才会重新渲染 CHild2 组件
        onCountChange函数不会重新创建，CHild2 组件不会重新渲染
      */}
      <CHild2 onCountChange={onCountChange2} />
    </div>
  )
}
export default App
