import { useState } from 'react'

import * as S from './styles'

import plusButton from '@/assets/img/plus.png'
import Image from 'next/image'
import EventModal from '../Modals/EventModal'

const LoggedHeader = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

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
          <S.BtnImage onClick={handleOpenEventModal}>
            criar evento
            <Image src={plusButton} />
          </S.BtnImage>
          <EventModal
            setModalIsOpen={setModalIsOpen}
            modalIsOpen={modalIsOpen}
          />
        </S.MenuItem>
      </S.Menu>
    </S.HeaderContainer>
  )
}

export default LoggedHeader
