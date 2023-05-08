import { SecondaryButton } from '@/components/Buttons'
import styled from 'styled-components'

export const MainContainer = styled.section`
  width: 100%;

  display: flex;

  max-width: 1280px;
  padding: 0 var(--spacing-8);
  margin: 0 auto;
`

export const InfoContainer = styled.div`
  display: flex;

  flex-direction: column;
  align-content: center;
  justify-content: center;

  width: 600px;
  height: calc(100vh - 90px);
`

export const Text = styled.p`
  font-size: var(--fontsize-20);
`

export const TextInfo = styled.p`
  font-size: var(--fontsize-20);
  text-align: justify;

  margin-bottom: var(--spacing-4);
`

export const Branding = styled.p`
  font-size: var(--fontsize-72);
`

export const ButtonLogo = styled(SecondaryButton)`
  background-color: var(--black);
  width: 160px;

  color: var(--yellow);
  font-size: var(--fontsize-16);
  font-weight: var(--fw-regular);
`
