import { useFormik } from 'formik'

import Input from '@/components/Inputs'
import { getInitialValues } from './helper'

import * as S from '../styles'
import { IAddress } from '../types'
import CompleteUserSchema from './schema'

export interface ICompleteUserFormData {
  name: string
  lastName: string
  address: IAddress
}

export interface ICompleteUserForm {
  resetUserType: () => void
  submitCallback: () => void
}

const CompleteUserForm = (props: ICompleteUserForm) => {
  const formik = useFormik<ICompleteUserFormData>({
    initialValues: getInitialValues(),
    validationSchema: CompleteUserSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => console.log(values)
  })

  return (
    <S.Form onSubmit={formik.handleSubmit}>
      <S.Container>
        <S.InputGroup>
          <Input
            id="name"
            name="name"
            type="text"
            label="Nome"
            value={formik.values.name}
            error={formik.errors.name}
            onChange={formik.handleChange}
          />
          <Input
            id="lastName"
            name="lastName"
            type="text"
            label="Sobrenome"
            value={formik.values.lastName}
            error={formik.errors.lastName}
            onChange={formik.handleChange}
          />
        </S.InputGroup>
        <S.FormTitle>Endereço:</S.FormTitle>
        <S.InnerFormContainer>
          <S.InputGroup>
            <Input
              id="address.state"
              name="address.state"
              type="text"
              label="Estado"
              value={formik.values.address.state}
              error={formik.errors.address?.state}
              onChange={formik.handleChange}
            />
            <Input
              id="address.city"
              name="address.city"
              type="text"
              label="Cidade"
              value={formik.values.address.city}
              error={formik.errors.address?.city}
              onChange={formik.handleChange}
            />
          </S.InputGroup>
          <S.InputGroup>
            <Input
              id="address.neighborhood"
              name="address.neighborhood"
              type="text"
              label="Bairro"
              value={formik.values.address.neighborhood}
              error={formik.errors.address?.neighborhood}
              onChange={formik.handleChange}
            />
            <Input
              id="address.street"
              name="address.street"
              type="text"
              label="Rua"
              value={formik.values.address.street}
              error={formik.errors.address?.street}
              onChange={formik.handleChange}
            />
            <Input
              id="address.number"
              name="address.number"
              type="text"
              label="Número"
              value={formik.values.address.number}
              error={formik.errors.address?.number}
              onChange={formik.handleChange}
            />
          </S.InputGroup>
          <S.InputGroup>
            <Input
              id="address.reference"
              name="address.reference"
              type="text"
              label="Referência"
              value={formik.values.address.reference}
              error={formik.errors.address?.reference}
              onChange={formik.handleChange}
            />
            <Input
              id="address.complement"
              name="address.complement"
              type="text"
              label="Complemento"
              value={formik.values.address.complement}
              error={formik.errors.address?.complement}
              onChange={formik.handleChange}
            />
          </S.InputGroup>
        </S.InnerFormContainer>
      </S.Container>
      <S.ButtonGroup>
        <S.Button onClick={() => props.resetUserType()} type="button">
          VOLTAR
        </S.Button>
        <S.Button type="submit">SALVAR</S.Button>
      </S.ButtonGroup>
    </S.Form>
  )
}

export default CompleteUserForm
