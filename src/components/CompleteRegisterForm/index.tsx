import { useState } from 'react'

import { TUserType } from '@/components/UserTypeSelect'
import { getOptionConf } from '@/components/UserTypeSelect/helper'
import CompleteUserForm from '../Forms/CompleteUserForm'

import * as S from './styles'
import CreateOngForm from '../Forms/CreateOngForm'

interface ICompleteRegister {
  userType: TUserType
  resetUserType: () => void
}

const TAB_OPTIONS: TUserType[] = ['voluntary', 'ong']

const CompleteRegister = (props: ICompleteRegister) => {
  const [selectedTab, setSelectedTab] = useState<TUserType | undefined>(
    'voluntary'
  )

  const shouldHideOngForm = props.userType === 'voluntary'

  return (
    <S.Container>
      <S.TabContainer>
        {TAB_OPTIONS.map((tabName) => (
          <S.TabCard
            key={tabName}
            isActive={selectedTab === tabName}
            hidden={shouldHideOngForm && tabName == 'ong'}
            onClick={() => setSelectedTab(tabName)}
          >
            <S.Image
              src={getOptionConf(tabName).icon as string}
              isActive={selectedTab === tabName}
              alt={tabName}
            />
            <S.TabName isActive={selectedTab === tabName}>
              {getOptionConf(tabName).text}
            </S.TabName>
          </S.TabCard>
        ))}
      </S.TabContainer>
      <S.RightContainer>
        {selectedTab === 'ong' ? (
          <CreateOngForm resetUserType={props.resetUserType} />
        ) : (
          <CompleteUserForm resetUserType={props.resetUserType} />
        )}
      </S.RightContainer>
    </S.Container>
  )
}

export default CompleteRegister
