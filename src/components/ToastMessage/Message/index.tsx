import { useEffect } from 'react'
import { IMessageConf } from '..'
import * as S from './styles'

interface IMessage extends IMessageConf {
  clearMessage: (idx: number) => void
  idx: number
}

const TIMER = 5000

const Message = (props: IMessage) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.clearMessage(props.idx)
    }, TIMER)

    return () => clearTimeout(timer)
  }, [props])

  return (
    <S.Container>
      <S.MessageContainer>
        <S.CloseIcon onClick={() => props.clearMessage(props.idx)}>
          x
        </S.CloseIcon>
        <S.Text>{props.message}</S.Text>
      </S.MessageContainer>
      <S.SpaceTimer type={props.type} />
    </S.Container>
  )
}

export default Message
