import styled from 'styled-components'
import { IMessageConf } from '..'

export const Container = styled.div`
  width: 100%;
`

export const MessageContainer = styled.div`
  width: 100%;
  padding: var(--spacing-3);

  background-color: var(--white-100);

  position: relative;
`

export const Text = styled.p``

export const CloseIcon = styled.button`
  position: absolute;

  top: 5px;
  right: 10px;
`

export const SpaceTimer = styled.div<{ type: IMessageConf['type'] }>`
  --background-color: ${(props) =>
    props.type === 'success' ? 'green' : 'red'};

  width: 100%;
  height: 3px;

  background-color: var(--background-color);
`
