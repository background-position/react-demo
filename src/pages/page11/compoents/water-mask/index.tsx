import React, { useState, useEffect, useRef } from 'react'
import './index.css'
import type { PropsWithChildren, FC } from 'react'
const WATER_MASK_DEFAULT_CONFIG = {
  text: 'water mask',
  color: '#fff',
  fontSize: '16px',
  fontFamily: 'Arial',
  fontWeight: 'normal',
  opacity: '.1',
  zIndex: '9999',
  rotate: '-22'
}
interface IWaterMaskProps {
  text: string
  color: string
  fontSize: string
  fontFamily: string
  fontWeight: string
  opacity: string
  zIndex: string
  rotate: string
}
interface PageProps {
  waterMaskConfig?: IWaterMaskProps
}
const App: FC<PropsWithChildren<PageProps>> = ({ children, ...props }) => {
  const ref = useRef<HTMLDivElement>(null)
  const createWaterMask = (config: IWaterMaskProps) => {
    const {
      text,
      color,
      fontSize,
      fontFamily,
      fontWeight,
      opacity,
      zIndex,
      rotate
    } = config
    const waterMask = document.createElement('div')
    waterMask.style.position = 'absolute'
    waterMask.style.top = '0'
    waterMask.style.left = '0'
    waterMask.style.right = '0'
    waterMask.style.bottom = '0'
    waterMask.style.width = '100%'
    waterMask.style.height = '100%'
    waterMask.style.background = 'rgba(0,0,0,.1)'
    waterMask.style.color = color
    waterMask.style.fontSize = fontSize
    waterMask.style.fontFamily = fontFamily
    waterMask.style.fontWeight = fontWeight
    waterMask.style.opacity = opacity
    waterMask.style.zIndex = zIndex
    waterMask.style.transform = `rotate(${rotate}deg)`
    waterMask.style.display = 'flex'
    waterMask.innerText = text
    return waterMask
  }
  const addWaterMask = () => {
    const watermarkContainer = ref.current
    if (watermarkContainer) {
      const config = { ...WATER_MASK_DEFAULT_CONFIG, ...props.waterMaskConfig }
      const waterMask = createWaterMask(config)
      watermarkContainer.appendChild(waterMask)
    }
  }

  useEffect(() => {
    const ob = new MutationObserver((records) => {
      console.log(records)
      // addWaterMask()
    })
    ob.observe(ref.current as Node, {
      childList: true,
      attributes: true,
      subtree: true
    })
    addWaterMask()
    return () => {
      ob.disconnect()
    }
    // eslint-disable-next-line
  }, [])
  return (
    <div ref={ref} className="water-mask-wrap">
      {children}
    </div>
  )
}
export default App
