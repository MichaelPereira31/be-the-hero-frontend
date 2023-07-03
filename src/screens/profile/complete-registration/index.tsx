import { useState } from 'react'

import UserTypeSelect, { TUserType } from '@/components/UserTypeSelect'
import { FullyContainer, MainContainer } from '@/styles/Containers'
import CompleteRegisterForm from '@/components/CompleteRegisterForm'

import * as S from './styles'
import LoggedHeader from '@/components/LoggedHeader'

const CompleteRegistrationScreen = () => {
  const [userType, setUserType] = useState<TUserType>()

  return (
    <>
      <FullyContainer noHeight>
        <LoggedHeader />
      </FullyContainer>
      <MainContainer>
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
    </>
  )
}

export default CompleteRegistrationScreen
