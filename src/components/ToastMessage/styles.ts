import styled from 'styled-components'

export const Container = styled.section<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column-reverse;

  gap: var(--spacing-3);
  padding: var(--spacing-2);

  position: fixed;
  bottom: 0;
  left: ${(props) => (props.isActive ? 0 : '-300px')};

  height: auto;
  max-height: 100vh;
  overflow-y: auto;

  z-index: 10;

  width: 100%;
  max-width: 300px;

  transition-property: left;
  transition-duration: 1000ms;
  transition-timing-function: linear;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`
