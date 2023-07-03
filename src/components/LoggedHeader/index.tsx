import { useState } from 'react'
import { useRouter } from 'next/router'

import * as S from './styles'

import EventModal from '../Modals/EventModal'

const LoggedHeader = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { push } = useRouter()

  const handleOpenEventModal = () => {
    setModalIsOpen(true)
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
          <button onClick={() => push('/')}>logout</button>
        </S.MenuItem>
      </S.Menu>
    </S.HeaderContainer>
  )
}

export default LoggedHeader
