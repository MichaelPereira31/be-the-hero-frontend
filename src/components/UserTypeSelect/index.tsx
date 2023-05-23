import { getOptionConf } from './helper'

import * as S from './styles'

export type TUserType = 'voluntary' | 'ong' | undefined

export interface IUserTypeSelect {
  value: TUserType
  setValue: (value: TUserType) => void
}

const OPTIONS: TUserType[] = ['voluntary', 'ong']

const UserTypeSelect = (props: IUserTypeSelect) => {
  return (
    <S.Container>
      <S.Title>QUEM É VOCÊ?</S.Title>
      <S.SelectContainer>
        {OPTIONS.map((option) => (
          <S.Option
            key={option}
            selected={props.value === option}
            onClick={() => props.setValue(option)}
          >
            <S.Image src={getOptionConf(option).icon} alt={option} />
            <S.Text>{getOptionConf(option).text}</S.Text>
          </S.Option>
        ))}
      </S.SelectContainer>
    </S.Container>
  )
}

export default UserTypeSelect
