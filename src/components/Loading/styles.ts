import styled, { keyframes } from 'styled-components'

export const Container = styled.section`
  width: 100%;

  height: auto;
  min-height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);

  & div:nth-child(1) {
    animation-delay: 0ms;
  }

  & div:nth-child(2) {
    animation-delay: 180ms;
  }

  & div:nth-child(3) {
    animation-delay: 360ms;
  }
`

export const DotAnimation = keyframes`
  0% {
    margin-bottom: 0;
  }

  100% {
    margin-bottom: var(--spacing-2);
  }
`

export const Dot = styled.div<{ dark?: boolean }>`
  display: block;

  width: 5px;
  height: 5px;

  background-color: ${(props) => (props.dark ? '#839cb2' : '#eff2f5')};

  border-radius: 20px;

  animation: ${DotAnimation} 600ms infinite;
`
