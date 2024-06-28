import React from 'react'
const App = (props: { count: number }) => {
  return (
    <div>
      <h1>Count: {props.count}</h1>
      <h1>{Math.random()}</h1>
    </div>
  )
}
const MemoizedApp = React.memo(App)
export default MemoizedApp
