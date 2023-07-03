import * as S from './styles'

export interface IVacancyCard {
  imageUrl: string
  ongName: string
  title: string
  subtitle: string
  description: string
}

const VacancyCard = (props: IVacancyCard) => {
  return (
    <S.Container>
      <S.Image src="https://agoranors.com/wp-content/uploads/2020/04/Fotos-Leandro-Molina-1-e1587385530894.jpeg" />
      <S.OngName>{props.ongName}</S.OngName>
      <S.Title>{props.title}</S.Title>
      <S.SubTitle>{props.subtitle}</S.SubTitle>
      <S.Description>{props.description}</S.Description>
    </S.Container>
  )
}

export default VacancyCard
