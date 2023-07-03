import { SecondaryButton } from '@/components/Buttons'
import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 8px;
`

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-5);
  border-radius: 20px;
  background-color: var(--white-50);
  padding: 30px;

  input {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-top: var(--spacing-1);
    border: none;
  }

  label {
    color: var(--black);
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-size: var(--fontsize-16);
    font-family: Inter;
    font-weight: var(--fw-bold);
  }
`

export const ModalButton = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

export const Button = styled(SecondaryButton)`
  width: 140px;

  border-radius: 19px;
  background: #0ff126;

  font-weight: var(--fw-bold);
  font-size: var(--fontsize-16);
`
