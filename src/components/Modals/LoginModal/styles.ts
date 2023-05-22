import LoadingButton from '@/components/Buttons/LoadingButton'
import { Image } from '@/styles/Image'
import styled from 'styled-components'

export const ImageSimpleLogo = styled(Image)`
  width: 200px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-5);
`

export const SubmitButton = styled(LoadingButton)`
  width: 100%;
  margin-inline: auto;
  margin-top: var(--spacing-2);
`
