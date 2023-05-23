import { useEffect, useState } from 'react'
import { v4 } from 'uuid'

import Message from './Message'

import * as S from './styles'

export type TMessageType = 'success' | 'error'

export interface IMessageConf {
  message: string
  type: TMessageType
  title?: string
}

export interface IToastConf extends IMessageConf {
  id: string
}

export const TOAST_EVENT_NAME = 'showtoastmessage'

const ToastMessage = () => {
  const [messages, setMessages] = useState<IToastConf[]>([])

  const handleClearMessage = (id: string) => {
    setMessages((messages) => messages.filter((message) => message.id !== id))
  }

  const eventCallback = (e: CustomEventInit<IMessageConf>) => {
    setMessages((prev) => [
      ...prev,
      {
        id: v4(),
        title: e.detail?.title,
        message: e.detail?.message ?? '',
        type: e.detail?.type ?? 'success'
      }
    ])
  }

  useEffect(() => {
    document.addEventListener(TOAST_EVENT_NAME, eventCallback)
  }, [])

  return (
    <S.Container isActive={!!messages}>
      {messages.map((message) => (
        <Message
          key={message.id}
          clearMessage={handleClearMessage}
          {...message}
        />
      ))}
    </S.Container>
  )
}

export default ToastMessage
