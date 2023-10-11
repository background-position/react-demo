import React, { useEffect, useReducer, useLayoutEffect, useRef } from 'react'
interface Action {
  type: string
  payload: number
}
interface State {
  count: number
}
const useCount = (num: number = 0) => {
  const init = (num: number) => {
    return { count: num }
  }
  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'add':
        return { ...state, count: state.count + 1 }
      case 'reduce':
        return { ...state, count: state.count - 1 }
      default:
        return state
    }
  }
  const [count, dispatch] = useReducer(reducer, num, init)
  return { count, dispatch }
}
const App = () => {
  const { count, dispatch } = useCount()
  const ref = useRef<HTMLDivElement>(null)
  /**
   * @description: 通过useLayoutEffect获取dom的宽高，其在页面渲染过程之前调用。（会影响性能）
   * @return {*}
   */
  useLayoutEffect(() => {
    console.log(ref.current?.clientWidth)
    console.log(ref.current?.clientHeight)
    console.log('useLayoutEffect')
  }, [])
  useEffect(() => {
    console.log('useEffect')
    const mouseDownFn = (e: MouseEvent) => {
      e.preventDefault()
      console.log('useEffect')
    }
    window.addEventListener('mousedown', mouseDownFn)
    return () => {
      window.removeEventListener('mousedown', mouseDownFn)
    }
  }, [])
  return (
    <div>
      <div
        style={{
          height: '300px'
        }}
        ref={ref}
      >
        <h1>this is a test box ,use useLayoutEffect get width and height</h1>
      </div>
      <h1>this is a {count.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: 'add', payload: 1 })
        }}
      >
        add count
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'reduce', payload: 1 })
        }}
      >
        reduce count
      </button>
    </div>
  )
}
export default App
