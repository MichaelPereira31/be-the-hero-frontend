import { useEffect, useState } from 'react'

import VacancyCard, { IVacancyCard } from '@/components/Cards/VacancyCard'
import LoggedHeader from '@/components/LoggedHeader'
import { FullyContainer, FullyHeader } from '@/styles/Containers'

import { getVacancies } from './fake'
import * as S from './styles'

const FeedScreen = () => {
  const [vacancies, setVacancies] = useState<IVacancyCard[]>()

  useEffect(() => {
    getVacancies().then((data) => setVacancies(data))
  }, [])

  return (
    <>
      <FullyHeader>
        <LoggedHeader />
      </FullyHeader>
      <FullyContainer>
        <S.TopContainer>
          <S.CallToAction>QUEM SOMOS NÓS?</S.CallToAction>
          <S.CallToAction>PORQUÊ AJUDAMOS?</S.CallToAction>
          <S.CallToAction>NOSSAS PRETENSÕES?</S.CallToAction>
          <S.LetsGoButton>VAMOS NESSA!</S.LetsGoButton>
        </S.TopContainer>
        <S.Container>
          <S.VacancyList>
            <S.Title>MISSÕES EM DESTAQUES</S.Title>
            <S.Line />
            <S.VacancyContainer>
              {vacancies?.map((vacancy, idx) => (
                <VacancyCard key={idx} {...vacancy} />
              ))}
            </S.VacancyContainer>
          </S.VacancyList>
          <S.VacancyList>
            <S.Title asFinal>Missões em reta final</S.Title>
            <S.Line />
            <S.VacancyContainer>
              {vacancies?.map((vacancy, idx) => (
                <VacancyCard key={idx} {...vacancy} />
              ))}
            </S.VacancyContainer>
          </S.VacancyList>

          <S.VacancyList>
            <S.Title style={{ color: 'grey' }}>Missões Terminadas</S.Title>
            <S.Line />
            <S.VacancyContainer>
              {vacancies?.map((vacancy, idx) => (
                <VacancyCard key={idx} {...vacancy} />
              ))}
            </S.VacancyContainer>
          </S.VacancyList>
        </S.Container>
      </FullyContainer>
    </>
  )
}

export default FeedScreen
