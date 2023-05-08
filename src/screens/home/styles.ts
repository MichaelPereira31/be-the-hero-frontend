import { SecondaryButton } from '@/components/Buttons'
import styled from 'styled-components'

export const MainContainer = styled.section`
  width: 100%;

  display: flex;

  max-width: 1280px;
  padding: 0 48px;
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
  font-size: 20px;
`

export const TextInfo = styled.p`
  font-size: 20px;
  margin-bottom: 30px;
`

export const Branding = styled.p`
  font-size: 60px;
`

export const ButtonLogo = styled(SecondaryButton)`
  background-color: balck;
  width: 160px;
  color: yellow;
  font-size: 16px;
  font-weight: 300;
`
