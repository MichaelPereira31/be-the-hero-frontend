import { ButtonHTMLAttributes } from 'react'
import { getButton } from './helper'
import Loading from '@/components/Loading'

export type IButtonType = 'primary' | 'secondary'

interface ILoadingButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: IButtonType
  isLoading?: boolean
}

const LoadingButton = (props: ILoadingButton) => {
  const { variant, isLoading, children, ...rest } = props
  const Button = getButton(variant)

  return <Button {...rest}>{isLoading ? <Loading /> : children}</Button>
}

export default LoadingButton
