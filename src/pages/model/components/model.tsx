import { Form, Input, Modal } from 'antd'
import React, { useImperativeHandle, useRef, useState } from 'react'
export interface ModalDemoForm {
  name: string
}
export interface ModalDemoRefType {
  show: () => Promise<ModalDemoForm | false>
}
interface ModalDemoPropsType {}
const ModalDemo = React.forwardRef<ModalDemoRefType, ModalDemoPropsType>(
  (_props, ref) => {
    const [visible, setVisible] = useState(false)
    const [form] = Form.useForm()
    const promiseRef = useRef<{
      resolve: (value: ModalDemoForm | false) => void
    }>()
    useImperativeHandle(ref, () => ({
      show: () => {
        setVisible(true)
        return new Promise((resolve) => {
          promiseRef.current = { resolve }
        })
      }
    }))
    const handleConfirm = async () => {
      try {
        setVisible(false)
        const formResult = await form.validateFields()
        promiseRef.current?.resolve(formResult)
      } catch (error) {
        console.log('error', error)
      }
    }
    const handleCancel = () => {
      setVisible(false)
      promiseRef.current?.resolve(false)
    }

    return (
      <Modal
        title="ModalDemo"
        open={visible}
        onOk={handleConfirm}
        onCancel={handleCancel}
      >
        <Form form={form}>
          <Form.Item label="name" name="name" required>
            <Input maxLength={8} autoComplete="off" />
          </Form.Item>
        </Form>
      </Modal>
    )
  }
)

export default ModalDemo
