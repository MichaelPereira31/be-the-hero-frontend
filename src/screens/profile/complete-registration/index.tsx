import { useState } from 'react'

import UserTypeSelect, { TUserType } from '@/components/UserTypeSelect'
import Header from '@/components/header'
import { MainContainer } from '@/styles/Containers'

import * as S from './styles'

const CompleteRegistrationScreen = () => {
  const [userType, setUserType] = useState<TUserType>()

  return (
    <MainContainer>
      <Header />
      <S.Content>
        <UserTypeSelect value={userType} setValue={setUserType} />
      </S.Content>
    </MainContainer>
  )
}

export default CompleteRegistrationScreen
