import styled from 'styled-components'
import { IMessageConf } from '..'

export const Container = styled.div<{ type: IMessageConf['type'] }>`
  --background-color: ${(props) =>
    props.type === 'success' ? 'var(--green-400)' : 'var(--red-400)'};

  width: 100%;

  border-radius: 8px;
`

export const MessageContainer = styled.div`
  width: 100%;
  padding-bottom: var(--spacing-3);
  padding-inline: var(--spacing-3);

  background-color: var(--white-100);

  position: relative;

  display: flex;
  gap: var(--spacing-1);
  flex-direction: column;
`

export const MessageHeader = styled.div`
  margin-top: var(--spacing-2);
`

export const MessageTitle = styled.h2`
  font-size: var(--fontsize-12);
  font-weight: var(--fw-bold);
`

export const Text = styled.p`
  font-size: var(--fontsize-12);
`

export const CloseIcon = styled.button`
  position: absolute;

  top: 5px;
  right: 10px;
`

export const SpaceTimer = styled.div<{
  type: IMessageConf['type']
  timeLife: number
  gPercentage: number
}>`
  --gradient-percentage: ${(props) => props.gPercentage ?? 0}%;
  --background-color: ${(props) =>
    props.type === 'success' ? 'var(--green-400)' : 'var(--red-400)'};

  width: 100%;
  height: 3px;

  background: linear-gradient(
    90deg,
    var(--background-color) var(--gradient-percentage),
    white 100%
  );
`
