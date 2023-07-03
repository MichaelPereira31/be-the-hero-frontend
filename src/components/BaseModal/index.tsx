import { CSSProperties, ReactNode, useEffect, useRef } from 'react'
import * as S from './styles'
import { createPortal } from 'react-dom'

interface IBaseModal {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  children: ReactNode
  width?: number
  height?: number
  style?: CSSProperties
  backdropStyles?: CSSProperties
  noCloseButton?: boolean
}

const BaseModal = (props: IBaseModal) => {
  const { isOpen, setIsOpen } = props
  const clickRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (evt: MouseEvent) => {
      const target = evt.target as HTMLDivElement

      if (clickRef.current && isOpen) {
        const clickWasOutside = !clickRef.current.contains(target)
        if (clickWasOutside) setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, setIsOpen])

  return props.isOpen
    ? createPortal(
        <>
          <S.Backdrop style={props.backdropStyles} />
          <S.Container
            width={props.width}
            height={props.height}
            style={props.style}
            ref={clickRef}
          >
            {!props.noCloseButton && (
              <S.CloseIcon onClick={() => props.setIsOpen(false)}>
                X
              </S.CloseIcon>
            )}
            {props.children}
          </S.Container>
        </>,
        document.body
      )
    : null
}

export default BaseModal
