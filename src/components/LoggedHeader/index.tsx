import { useState } from 'react'

import * as S from './styles'

import EventModal from '../Modals/EventModal'
import LoginModal from '../Modals/LoginModal'

const LoggedHeader = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false)

  const handleOpenEventModal = () => {
    setModalIsOpen(true)
  }

  const handleOpenLoginModal = () => {
    setModalLoginIsOpen(true)
  }

  return (
    <S.HeaderContainer>
      <div></div>
      <S.Menu>
        <S.MenuItem>
          <button>contato</button>
        </S.MenuItem>
        <S.MenuItem>
          <button onClick={handleOpenEventModal}>criar evento</button>
          <EventModal
            setModalIsOpen={setModalIsOpen}
            modalIsOpen={modalIsOpen}
          />
        </S.MenuItem>
        <S.MenuItem>
          <button onClick={handleOpenLoginModal}>logout</button>
          <LoginModal
            setModalIsOpen={setModalLoginIsOpen}
            modalIsOpen={modalLoginIsOpen}
          />
        </S.MenuItem>
      </S.Menu>
    </S.HeaderContainer>
  )
}

export default LoggedHeader
