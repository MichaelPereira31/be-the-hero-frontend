import { device } from '@/utils/device'
import styled from 'styled-components'

export const MainContainer = styled.section`
  width: 100%;

  max-width: 1280px;
  padding: 0 48px;
  margin: 0 auto;
`

export const FullyContainer = styled.section<{ noHeight?: boolean }>`
  --height: ${(props) => (props.noHeight ? 'auto' : 'calc(100vh - 70px)')};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  min-height: var(--height);

  @media ${device.mobileXXL} {
    display: block;
  }
`
export const FullyHeader = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;

  @media ${device.mobileXXL} {
    display: block;
  }
`
