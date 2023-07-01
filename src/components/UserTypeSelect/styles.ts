import styled from 'styled-components'

export const Container = styled.div`
  max-width: 800px;
  height: auto;
  width: 100%;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: var(--spacing-8);
`

export const Title = styled.h1`
  font-size: var(--fontsize-72);
  font-weight: var(--fw-bold);

  text-align: center;
`

export const SelectContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-8);
`

export const Option = styled.div<{ selected: boolean }>`
  --option-width: ${(props) => (props.selected ? 340 : 310)}px;
  --option-height: ${(props) => (props.selected ? 390 : 360)}px;
  --background-color: ${(props) =>
    props.selected ? 'var(--gray-68)' : 'var(--white-50)'};

  max-height: var(--option-height);
  max-width: var(--option-width);
  height: auto;
  width: 100%;

  background: var(--background-color);

  transition-property: min-height max-width background-color;
  transition-duration: 200ms;
  transition-timing-function: linear;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: var(--spacing-8);
  gap: var(--spacing-6);

  border-radius: 19px;

  box-shadow: 0px 4px 4px 0px var(--black-40);

  cursor: pointer;

  :hover {
    --option-width: 340px;
    --option-height: 390px;
  }
`

export const Image = styled.img`
  height: 231px;
  width: 231px;
`

export const Text = styled.p`
  font-size: var(--fontsize-24);
  font-weight: var(--fw-bold);
`
