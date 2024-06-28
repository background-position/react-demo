import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'
interface IMenu {
  path: string
}
interface PageProps {
  menus: IMenu[]
}
const App: FC<PageProps> = (props) => {
  const { menus } = props
  const navigate = useNavigate()
  const menuClick = (path: string) => {
    navigate(path)
  }
  return (
    <div>
      {menus.map((item, index) => {
        const { path } = item
        return (
          <div
            key={index}
            onClick={() => {
              menuClick(path)
            }}
          >
            {path}
          </div>
        )
      })}
    </div>
  )
}
export default App
