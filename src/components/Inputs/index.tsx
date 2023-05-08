import { useState } from 'react'

import * as S from './styles'

import Eye from '../../assets/img/eye.png'
import CloseEye from '../../assets/img/close-eye.png'

type TInputsProps = {
  type: string
  name: string
  showButton: boolean
}

const Input = (props: TInputsProps) => {
  const { name, type, showButton = false } = props
  const [inputType, setInputType] = useState(type)
  const validatePassword = inputType === 'password'

  return (
    <S.Wrapper data-testid={`input-validated-${name}`}>
      <S.Input
        name={name}
        type={inputType}
        required
        data-testid={`input-validated-test`}
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
    </S.Wrapper>
  )
}

export default Input
