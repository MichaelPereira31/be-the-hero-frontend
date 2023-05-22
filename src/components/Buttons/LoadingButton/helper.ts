import { IButtonType } from '.'
import { PrimaryButton, SecondaryButton } from '..'

export const getButton = (variant: IButtonType) => {
  switch (variant) {
    case 'primary':
      return PrimaryButton
    case 'secondary':
      return SecondaryButton
    default:
      return PrimaryButton
  }
}
