import { count } from 'console'
import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  FC
} from 'react'
interface PageProps {}
interface State {
  count: number
}
const Context = createContext<State>({
  count: 1
})
const SunComponents: FC = () => {
  const value = useContext(Context)
  return <div>{value.count}</div>
}
const ChildCOmponent: FC = () => {
  // 直接获取父组件的值
  const value = useContext(Context)
  return (
    <div>
      <div>this is child</div>
      <div>{value.count}</div>
      <div>
        <SunComponents />
      </div>
    </div>
  )
}
const App: FC<PageProps> = () => {
  const value = useContext(Context)
  return (
    <Context.Provider value={value}>
      <div>this is parent</div>
      <div>
        <ChildCOmponent />
      </div>
      <div></div>
    </Context.Provider>
  )
}
export default App
