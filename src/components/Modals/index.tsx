import { useEffect } from 'react'
import Modal from 'react-modal'

import * as S from './styles'
import { CSSProperties } from 'styled-components'

type TBaseModal = {
  contentLabel: string
  setModalIsOpen: (value: boolean) => void
  modalIsOpen: boolean
  children: React.ReactElement
  customContent: object
}

type Content = CSSProperties | undefined

export type TModalStyles = {
  content?: Content
  overlay?: Content
}

const BaseModal = (props: TBaseModal) => {
  function closeModal() {
    props.setModalIsOpen(false)
  }

  useEffect(() => {
    Modal.setAppElement('body')
  }, [])

  const customStyles: TModalStyles = {
    ...S.defaultModalStyles,
    content: {
      ...S.defaultModalStyles.content,
      ...props.customContent
    }
  }

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
