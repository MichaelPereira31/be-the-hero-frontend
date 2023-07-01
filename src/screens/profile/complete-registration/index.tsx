import { useState } from 'react'

import UserTypeSelect, { TUserType } from '@/components/UserTypeSelect'
import Header from '@/components/header'
import { MainContainer } from '@/styles/Containers'
import CompleteRegisterForm from '@/components/CompleteRegisterForm'

import * as S from './styles'

const CompleteRegistrationScreen = () => {
  const [userType, setUserType] = useState<TUserType>()

  return (
    <MainContainer>
      <Header />
      <S.Content>
        {!userType && (
          <UserTypeSelect value={userType} setValue={setUserType} />
        )}
        {!!userType && (
          <CompleteRegisterForm
            userType={userType}
            resetUserType={() => setUserType(undefined)}
          />
        )}
      </S.Content>
    </MainContainer>
  )
}

export default CompleteRegistrationScreen
