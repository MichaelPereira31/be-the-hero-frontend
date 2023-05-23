import { useEffect, useRef, useState } from 'react'

import { IToastConf } from '..'
import { getNormalTitle } from './helper'

import * as S from './styles'

interface IMessage extends IToastConf {
  clearMessage: (id: string) => void
}

const TIMER = 5000
const MAX_GPERCENTAGE = 250

const Message = (props: IMessage) => {
  const title = props.title ?? getNormalTitle(props.type)
  const [gPercentage, setGPercentage] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (timeoutRef.current) return

    timeoutRef.current = setTimeout(() => {
      props.clearMessage(props.id)
      timeoutRef.current = undefined
    }, TIMER)
  }, [props])

  useEffect(() => {
    if (gPercentage > MAX_GPERCENTAGE) return

    const interval = setInterval(() => {
      setGPercentage((prev) => prev + 2)
    }, 40)

    return () => clearInterval(interval)
  }, [gPercentage])

  return (
    <S.Container type={props.type}>
      <S.MessageContainer>
        <S.MessageHeader>
          <S.MessageTitle>{title}</S.MessageTitle>
          <S.CloseIcon onClick={() => props.clearMessage(props.id)}>
            x
          </S.CloseIcon>
        </S.MessageHeader>
        <S.Text>{props.message}</S.Text>
      </S.MessageContainer>
      <S.SpaceTimer
        gPercentage={gPercentage - 50}
        type={props.type}
        timeLife={TIMER}
      />
    </S.Container>
  )
}

export default Message
