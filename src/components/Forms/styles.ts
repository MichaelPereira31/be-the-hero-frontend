import styled from 'styled-components'
import { SecondaryButton } from '../Buttons'

export const Form = styled.form`
  width: 100%;
`

export const Container = styled.section`
  width: 100%;

  background-color: var(--white-50);
  padding: var(--spacing-5);

  border-radius: 20px;

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
    font-size: var(--fontsize-18);
    font-family: Inter;
    font-weight: var(--fw-bold);
  }
`

export const InputGroup = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--spacing-3);

  margin-bottom: var(--spacing-4);

  width: 100%;
  height: 65px;
`

export const FormTitle = styled.h2`
  color: var(--black);
  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: var(--fontsize-20);
  font-weight: var(--fw-bold);
  font-family: 'Inter';

  margin-bottom: var(--spacing-2);
`

export const InnerFormContainer = styled.section`
  border-radius: 19px;
  background: var(--white-300);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;

  padding: var(--spacing-3);
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--spacing-1);

  margin-top: var(--spacing-2);
`

export const Button = styled(SecondaryButton)`
  width: 150px;

  border-radius: 19px;
  background: #0ff126;

  font-weight: var(--fw-bold);
  font-size: var(--fontsize-18);
`
