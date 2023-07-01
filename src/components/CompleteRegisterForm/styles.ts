import styled, { css } from 'styled-components'

export const Container = styled.section`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: var(--spacing-8);
`

export const TabContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  gap: var(--spacing-4);
`

export const TabCardActive = css`
  width: 219px;
  height: 235px;

  background-color: var(--green-450);
`

export const TabCard = styled.div<{ isActive: boolean; hidden: boolean }>`
  --display: ${(props) => (props.hidden ? 'none' : 'flex')};

  display: var(--display);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-4);

  background-color: var(--white-50);

  padding: var(--spacing-5);
  border-radius: 20px;

  width: 169px;
  height: 181px;

  ${(props) => props.isActive && TabCardActive}

  cursor: pointer;

  transition-property: all;
  transition-duration: 200ms;
  transition-timing-function: linear;
`

export const Image = styled.img<{ isActive: boolean }>`
  --image-weigth: ${(props) => (props.isActive ? '130px' : '100px')};

  width: var(--image-weigth);
  height: var(--image-weigth);
`

export const TabName = styled.h2<{ isActive: boolean }>`
  --color: ${(props) => (props.isActive ? 'var(--white)' : 'var(--black)')};
  --font-family: ${(props) => (props.isActive ? 'Inter' : 'Oswald')};
  --font-size: ${(props) =>
    props.isActive ? 'var(--fontsize-20)' : 'var(--fontsize-14)'};

  font-size: var(--font-size);
  text-transform: uppercase;
  font-weight: var(--fw-bold);
  color: var(--color);
  font-family: var(--font-family);
`

export const RightContainer = styled.section`
  flex-grow: 1;
`

export const FormContainer = styled.div`
  width: 100%;

  background-color: var(--white-50);
  padding: var(--spacing-5);

  border-radius: 20px;
`
