import { TUserType } from '.'

import OngIcon from '@/assets/img/ong.svg'
import VoluntaryIcon from '@/assets/img/voluntary.svg'

export const getOptionConf = (value: TUserType) => {
  const isOng = value === 'ong'
  return {
    text: isOng ? 'Ong' : 'Voluntário',
    icon: isOng ? OngIcon.src : VoluntaryIcon.src
  }
}
