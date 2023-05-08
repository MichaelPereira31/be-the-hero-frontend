import { ReactNode, useEffect } from 'react'
import Modal, { Styles } from 'react-modal'

import * as S from './styles'

type TBaseModal = {
  contentLabel: string
  setModalIsOpen: (value: boolean) => void
  modalIsOpen: boolean
  children: ReactNode
  customContent: object
}

const BaseModal = (props: TBaseModal) => {
  function closeModal() {
    props.setModalIsOpen(false)
  }

  useEffect(() => {
    Modal.setAppElement('body')
  }, [])

  const customStyles = {
    ...S.defaultModalStyles,
    content: {
      ...S.defaultModalStyles.content,
      ...props.customContent
    }
  } as unknown as Styles

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      contentLabel={props.contentLabel || 'Modal'}
      style={customStyles}
    >
      {props.children}
    </Modal>
  )
}

export default BaseModal
