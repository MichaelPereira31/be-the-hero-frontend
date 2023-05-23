import { device } from '@/utils/device'
import styled from 'styled-components'
import LoadingButton from '../Buttons/LoadingButton'

export const ModalClose = styled.button`
  position: absolute;
  top: var(--spacing-2);
  right: var(--spacing-3);
`

export const ModalBody = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 320px;
  width: 100%;
  margin-inline: auto;
`

export const ModalTitle = styled.title`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-3) 0;
  margin-top: 20px;
  font-size: var(--fontsize-medium);
  @media ${device.mobileL} {
    font-size: var(--fontsize-extralarge);
  }
`

export const ModalDescription = styled.p`
  max-width: 283px;
  padding: var(--spacing-3) 0;
  margin: 0 auto var(--spacing-5) auto;
  text-align: center;
  font-size: var(--fontsize-extrasmall);
  @media ${device.mobileL} {
    font-size: var(--fontsize-small);
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-5);
`

export const ModalButtom = styled(LoadingButton)`
  width: 100%;
  margin-inline: auto;
  margin-top: var(--spacing-2);
`
// Login modal
export const ModalOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: var(--spacing-7);
`

export const ModalLink = styled.a`
  color: var(--purple-100);
  font-size: var(--fontsize-small);

  :hover {
    text-decoration: underline;
  }
`

export const ModalText = styled.p`
  font-size: var(--fontsize-small);
`

export const ModalLogo = styled.img`
  margin-top: var(--spacing-8);
  margin-bottom: var(--spacing-5);
  margin-inline: auto;
`
