import React, { useState, useEffect, useRef } from 'react'
import WaterMask from './compoents/water-mask'
import type { PropsWithChildren, FC } from 'react'
import './index.css'
interface PageProps {}
const App: FC<PropsWithChildren<PageProps>> = ({ children, ...props }) => {
  return (
    <div>
      <WaterMask>
        <div className="water-mask-child">this is water mask child</div>
      </WaterMask>
    </div>
  )
}
export default App
