import * as S from './styles'

const Loading = (props: { dark?: boolean }) => {
  return (
    <S.Container data-testid="loading__container">
      <S.Dot dark={props.dark} />
      <S.Dot dark={props.dark} />
      <S.Dot dark={props.dark} />
    </S.Container>
  )
}

export default Loading
