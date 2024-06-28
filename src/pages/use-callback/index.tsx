import React, { useState, useCallback, useEffect, FC } from 'react'
import { Button } from '../../components'
interface PageProps {}

const CHild: FC<{ onCountChange: () => void }> = (props) => {
  return (
    <div>
      <h1>{Math.random()}</h1>
      <Button onClick={props.onCountChange}> click</Button>
    </div>
  )
}
const CHild2: FC<{ onCountChange: () => void }> = (props) => {
  return (
    <div>
      <h1>{Math.random()}</h1>
      <Button onClick={props.onCountChange}> click</Button>
    </div>
  )
}
const CHildMemo = React.memo(CHild)
const CHild2Memo = React.memo(CHild2)

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
  }, [count2])
  return (
    <div>
      <h3>当时间变化时，CHild组件会重新渲染，CHild2组件不会重新渲染</h3>
      <h1>{time}</h1>
      <h1>{count}</h1>
      <h1>{count2}</h1>
      {/* 
        没有使用 useCallback 时，每次点击按钮，都会重新渲染 CHild 组件
        onCountChange函数会重新创建，导致 CHild 组件重新渲染
      */}
      <CHildMemo onCountChange={onCountChange} />
      {/* 
        使用 useCallback 时，只有 count 变化时，才会重新渲染 CHild2 组件
        onCountChange函数不会重新创建，CHild2 组件不会重新渲染
      */}
      <CHild2Memo onCountChange={onCountChange2} />
    </div>
  )
}
export default App
