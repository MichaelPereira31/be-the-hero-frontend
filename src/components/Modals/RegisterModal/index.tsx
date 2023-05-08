import BaseModal from '@/components/Modals'
import Input from '@/components/Inputs/index'
import { ImageSimpleLogo } from '../LoginModal/styles'
import logoMini from '@/assets/img/simple-logo.png'
import * as S from '../styles'

type TRegisterModalProps = {
  setModalIsOpen: (value: boolean) => void
  modalIsOpen: boolean
}

const RegisterModal = (props: TRegisterModalProps) => {
  const customModalContent = {
    height: '620px',
    borderRadius: 0
  }

  return (
    <BaseModal
      modalIsOpen={props.modalIsOpen}
      setModalIsOpen={props.setModalIsOpen}
      contentLabel="Register Modal"
      customContent={customModalContent}
    >
      <S.ModalBody data-testid="register-modal">
        <S.ModalDescription>
          Bem vindo ao
          <ImageSimpleLogo src={logoMini.src} />
        </S.ModalDescription>

        <form>
          <S.ModalLabel htmlFor="username">Username</S.ModalLabel>
          <Input name="username" type="text" showButton={false} />
          <S.ModalLabel htmlFor="email">E-mail</S.ModalLabel>
          <Input name="email" type="text" showButton={false} />
          <S.ModalLabel htmlFor="password">Senha</S.ModalLabel>
          <Input name="password" type="password" showButton />
          <S.ModalLabel htmlFor="confirm_password">
            Confirmar Senha
          </S.ModalLabel>
          <Input name="confirm_password" type="password" showButton />
          <S.ModalButtom type="submit">Inscrever-se</S.ModalButtom>
        </form>
      </S.ModalBody>
    </BaseModal>
  )
}

export default RegisterModal
