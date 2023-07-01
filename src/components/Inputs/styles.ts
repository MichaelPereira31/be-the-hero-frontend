import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Wrapper = styled.div`
  position: relative;
`

export const Label = styled.label`
  font-size: var(--fontsize-14);
`

export const Input = styled.input`
  width: 100%;
  height: 32px;

  border: 1px solid var(--purple-400);
  border-radius: 4px;

  padding-inline: var(--spacing-2);
  position: relative;
`

export const Error = styled.sub`
  color: var(--red-400);
  font-size: var(--fontsize-11);
`

export const Image = styled.img`
  width: 24px;

  cursor: pointer;

  position: absolute;
  top: 4px;
  right: 16px;
`
