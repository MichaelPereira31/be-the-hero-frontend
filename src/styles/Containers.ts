import { device } from '@/utils/device'
import styled from 'styled-components'

export const MainContainer = styled.section`
  width: 100%;

  max-width: 1280px;
  padding: 0 48px;
  margin: 0 auto;
`

export const FullyContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  min-height: calc(100vh - 70px);

  @media ${device.mobileXXL} {
    display: block;
  }
`
