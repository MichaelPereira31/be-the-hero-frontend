import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import Message from './Message'

import * as S from './styles'

export type TMessageType = 'success' | 'error'

export interface IMessageConf {
  message: string
  type: TMessageType
}

export const TOAST_EVENT_NAME = 'showtoastmessage'

const ToastMessage = () => {
  const [messages, setMessages] = useState<IMessageConf[]>([])
  const isActive = !!messages.length

  const handleClearMessage = (idx: number) => {
    setMessages(messages.filter((_, index) => index !== idx))
  }

  useEffect(() => {
    document.addEventListener(
      TOAST_EVENT_NAME,
      (e: CustomEventInit<IMessageConf>) => {
        if (!e.detail) return

        setMessages((messages) => {
          messages.push({
            message: e.detail?.message ?? '',
            type: e.detail?.type as TMessageType
          })
          return messages
        })
      }
    )
  }, [])

  return isActive
    ? createPortal(
        <S.Container isActive={isActive}>
          {messages.map(({ message, type }, idx) => (
            <Message
              idx={idx}
              key={idx}
              clearMessage={handleClearMessage}
              message={message}
              type={type}
            />
          ))}
        </S.Container>,
        document.body
      )
    : null
}

export default ToastMessage
