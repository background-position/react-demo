import React, { useState, useEffect, useReducer, FC } from 'react'
interface PageProps {}
interface State {
  count: number
}
type CounterAction =
  | { type: 'reset' }
  | { type: 'plus' }
  | { type: 'setCount'; value: number }
const initialState: State = {
  count: 1
}
const stateReducer = (state: State, action: CounterAction): State => {
  switch (action.type) {
    case 'plus':
      return { ...state, count: state.count + 1 }
    case 'reset':
      return initialState
    case 'setCount':
      return { ...state, count: action.value }
    default:
      return state
  }
}

const App: FC<PageProps> = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState)
  return (
    <div>
      <div>{state.count}</div>
      <div>
        <button onClick={() => dispatch({ type: 'plus' })}>+</button>
        <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
        <button onClick={() => dispatch({ type: 'setCount', value: 10 })}>
          set 10
        </button>
      </div>
    </div>
  )
}
export default App
