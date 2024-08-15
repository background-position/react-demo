import { Button } from 'antd'
import React, { useRef } from 'react'
import ModalDemo, { ModalDemoRefType } from './components/model'

const ModalDemoTestPage: React.FC = () => {
  const demoModalRef = useRef<ModalDemoRefType>(null)
  const longCheck = async () => {
    const result = await demoModalRef.current!.show()
    if (!result) {
      return
    }
    console.log('result as ModalDemoForm', result)
  }
  return (
    <div>
      <h1>ModalDemoTestPage </h1>
      <Button onClick={longCheck}>Click Here!</Button>
      <ModalDemo ref={demoModalRef} />
    </div>
  )
}

export default ModalDemoTestPage
