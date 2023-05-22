import Header from '@/components/header'
import { FullyContainer, MainContainer } from '@/styles/Containers'

import * as S from './styles'
import logo from '@/assets/img/logo.png'
import { Image } from '@/styles/Image'
import { useState } from 'react'
import RegisterModal from '@/components/Modals/RegisterModal'

const HomeScreen = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false)

  return (
    <>
      <MainContainer>
        <Header />
      </MainContainer>
      <FullyContainer>
        <S.MainContainer>
          <S.InfoContainer>
            <S.Text>Seja o Heroi de uma causa! Bem-vindo ao</S.Text>
            <S.Branding>BE THE HERO</S.Branding>
            <S.TextInfo>
              O site que conecta pessoas dispostas a ajudar causas que precisam
              de um herói. Junte-se a nós e faça a diferença vida das pessoas.
            </S.TextInfo>
            <S.ButtonLogo onClick={() => setIsRegisterModalOpen(true)}>
              Seja um Heroi!
            </S.ButtonLogo>
          </S.InfoContainer>
          <S.InfoContainer>
            <Image src={logo.src} />
          </S.InfoContainer>
        </S.MainContainer>
        <RegisterModal
          modalIsOpen={isRegisterModalOpen}
          setModalIsOpen={setIsRegisterModalOpen}
        />
      </FullyContainer>
    </>
  )
}

export default HomeScreen
