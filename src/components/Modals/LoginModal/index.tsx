import { useState } from 'react'
import BaseModal from '@/components/BaseModal'

import {
  ModalBody,
  ModalDescription,
  ModalLabel,
  ModalButtom,
  ModalOptions,
  ModalText,
  ModalLink
} from '../styles'
import Input from '@/components/Inputs'
import RegisterModal from '../RegisterModal'

import logoMini from '@/assets/img/simple-logo.png'
import * as S from './styles'

type TLoginModalProps = {
  setModalIsOpen: (value: boolean) => void
  modalIsOpen: boolean
}

const LoginModal = (props: TLoginModalProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleRegisterModal = () => {
    setIsOpen(true)
  }

  return (
    <BaseModal
      isOpen={props.modalIsOpen}
      setIsOpen={props.setModalIsOpen}
      style={{
        height: '560px'
      }}
    >
      <ModalBody data-testid="login-modal">
        <ModalDescription>
          Bem vindo ao
          <S.ImageSimpleLogo src={logoMini.src} />
        </ModalDescription>

        <form>
          <ModalLabel htmlFor="email">Email / Usuário </ModalLabel>
          <Input name="email" type="text" showButton={false} />
          <ModalLabel htmlFor="password">Senha</ModalLabel>
          <Input name="password" type="password" showButton />

          <ModalButtom type="submit">Entrar</ModalButtom>
        </form>

        <ModalOptions>
          <ModalLink>Esqueceu a senha?</ModalLink>
          <ModalText>
            Não tem uma conta?{' '}
            <ModalLink onClick={handleRegisterModal}>Cadastre-se</ModalLink>
            <RegisterModal modalIsOpen={isOpen} setModalIsOpen={setIsOpen} />
          </ModalText>
        </ModalOptions>
      </ModalBody>
    </BaseModal>
  )
}

export default LoginModal
