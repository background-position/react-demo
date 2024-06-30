import React, { useState, FC } from 'react'
import './index.css'
interface PageProps {}
const CHild = (props: { count: number }) => {
  return (
    <div>
      <h1>Count: {props.count}</h1>
      <h1>{Math.random()}</h1>
    </div>
  )
}
const MemoizedApp = React.memo(CHild)
const userList: {
  id: number
  name: string
}[] = []
for (let i = 0; i < 50; i++) {
  userList.push({
    id: i,
    name: `name${i}`
  })
}
const filterUser = (count: number) => {
  return userList.filter((item) => item.id > count)
}
const App: FC<PageProps> = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const useMemoUsers = React.useMemo(() => filterUser(count), [count])
  return (
    <>
      <h1>Vite + React</h1>

      <div>
        input count:{' '}
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <br />
        {useMemoUsers.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount2((count2) => count2 + 1)}>
          count2 is {count2}
        </button>
      </div>
      <p className="read-the-docs">
        click the button to see the difference between useMemo and memo
        
      </p>
      <MemoizedApp count={count} />
    </>
  )
}
export default App
