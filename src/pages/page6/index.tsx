import React, { useState, useEffect, FC, useContext } from 'react'
import { Button } from 'antd'
import { MyRedux } from '../../mini-redux'
import MiniRedux from '../../mini-redux'
interface PageProps {}

const App: FC<PageProps> = () => {
  let { state, dispatch } = useContext(MyRedux)
  return (
    <MiniRedux>
      {state.count}
      <Button
        onClick={() => {
          dispatch({ type: 'add' })
        }}
      >
        点击增加
      </Button>
    </MiniRedux>
  )
}
export default App
