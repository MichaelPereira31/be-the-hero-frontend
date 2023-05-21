import styled from 'styled-components'

export const Backdrop = styled.section`
  width: 100%;
  height: 100vh;

  background-color: var(--black);

  z-index: 100;

  position: fixed;
  top: 0;
  right: 0;

  filter: opacity(0.4);

  display: flex;
  align-items: center;
  justify-content: center;
`

interface IContainer {
  width?: number
  height?: number
}

export const Container = styled.section<IContainer>`
  --container-width: ${(props) => (props.width ? props.width : 400)}px;
  --container-height: ${(props) => (props.width ? props.width : 35)}px;

  width: 100%;
  max-width: var(--container-width);
  min-height: var(--container-height);
  height: auto;

  background-color: white;

  z-index: 102;

  position: fixed;
  top: calc(50% - (var(--container-height) / 2));
  left: 50%;
  transform: translate(-50%, -50%);
`

export const CloseIcon = styled.div`
  position: absolute;

  top: 10px;
  right: 10px;

  cursor: pointer;
`
