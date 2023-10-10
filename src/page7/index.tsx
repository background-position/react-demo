import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react'
const Child = forwardRef((_, ref) => {
  const [value, setvalue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  const toFocus = () => {
    inputRef.current && inputRef.current.focus()
  }
  useImperativeHandle(
    ref,
    () => ({
      value,
      toFocus
    }),
    [value]
  )
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        onChange={(e) => {
          e.target.value && setvalue(e.target.value)
        }}
      />
    </div>
  )
})
const App = () => {
  const [count, setCount] = useState<number>(0)
  const childRef = useRef<{
    values: string
    toFocus: () => void
  }>()
  /**
   * @description: 增加数字
   * @return {*}
   */
  const addCount = (): void => {
    setCount((pre) => {
      return pre + 1
    })
  }
  const showChild = (): void => {
    console.log(childRef.current)
  }
  const showFocus = () => {
    childRef.current && childRef.current.toFocus()
  }
  return (
    <div>
      <h1>this is a {count}</h1>
      <div>
        <button onClick={addCount}>add count</button>
      </div>
      <div>
        <Child ref={childRef} />
      </div>
      <div>
        <button onClick={showChild}> show child</button>
        <button onClick={showFocus}> shou focus</button>
      </div>
    </div>
  )
}
export default App
