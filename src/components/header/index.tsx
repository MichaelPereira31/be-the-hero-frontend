import { useState } from 'react'

import * as S from './styles'

import RegisterModal from '../Modals/RegisterModal'
import LoginModal from '../Modals/LoginModal'

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false)

  const handleOpenLoginModal = () => {
    setModalLoginIsOpen(true)
  }

  const handleOpenRegisterModal = () => {
    setModalIsOpen(true)
  }

  return (
    <S.HeaderContainer>
      <div></div>
      <S.Menu>
        <S.MenuItem>
          <button>contato</button>
        </S.MenuItem>
        <S.MenuItem data-testid="inscreva-se">
          <button
            onClick={handleOpenRegisterModal}
            data-testid="inscreva-se__open-modal"
          >
            registre-se
          </button>
          <RegisterModal
            setModalIsOpen={setModalIsOpen}
            modalIsOpen={modalIsOpen}
          />
        </S.MenuItem>
        <S.MenuItem>
          <button onClick={handleOpenLoginModal}>login</button>
          <LoginModal
            setModalIsOpen={setModalLoginIsOpen}
            modalIsOpen={modalLoginIsOpen}
          />
        </S.MenuItem>
      </S.Menu>
    </S.HeaderContainer>
  )
}

export default Header
