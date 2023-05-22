import { InputHTMLAttributes, useState } from 'react'

import * as S from './styles'

import Eye from '../../assets/img/eye.png'
import CloseEye from '../../assets/img/close-eye.png'

interface TInputsProps extends InputHTMLAttributes<HTMLInputElement> {
  showButton?: boolean
  error?: string
  label?: string
}

const Input = (props: TInputsProps) => {
  const { name, label, type, showButton = false, error, ...rest } = props
  const [inputType, setInputType] = useState(type)
  const validatePassword = inputType === 'password'

  return (
    <>
      {label && <S.Label>{label}</S.Label>}
      <S.Wrapper data-testid={`input-validated-${name}`}>
        <S.Input
          name={name}
          type={inputType}
          data-testid={`input-validated-test`}
          {...rest}
        />
        {showButton && (
          <S.Image
            src={validatePassword ? Eye.src : CloseEye.src}
            alt="Mostrar senha"
            onClick={() =>
              validatePassword ? setInputType('text') : setInputType('password')
            }
            data-testid={'show-password-button'}
          />
        )}
        {error && <S.Error>{error}</S.Error>}
      </S.Wrapper>
    </>
  )
}

export default Input
