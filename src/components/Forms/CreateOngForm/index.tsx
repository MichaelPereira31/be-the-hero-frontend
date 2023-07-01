import { useFormik } from 'formik'
import { FormEvent } from 'react'

import Input from '@/components/Inputs'
import { getInitialValues } from './helper'

import * as S from '../styles'
import { IAddress } from '../types'
import CreateOngSchema from './schema'

export interface ICreateOngForm {
  resetUserType: () => void
}

export interface ICreateOngFormData {
  name: string
  description: string
  objective: string
  main_phone: string
  secondary_phone: string
  main_email: string
  secondary_email: string
  address: IAddress
}

const CreateOngForm = (props: ICreateOngForm) => {
  const handleSubmit = (values: ICreateOngFormData) => {
    console.log(values)
  }

  const formik = useFormik<ICreateOngFormData>({
    initialValues: getInitialValues(),
    onSubmit: handleSubmit,
    validationSchema: CreateOngSchema,
    validateOnBlur: true,
    enableReinitialize: true
  })

  return (
    <S.Form
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        formik.handleSubmit(e)
      }}
    >
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
        </S.InputGroup>
        <S.InputGroup>
          <Input
            id="description"
            name="description"
            type="text"
            label="Descrição"
            value={formik.values.description}
            error={formik.errors.description}
            onChange={formik.handleChange}
          />
        </S.InputGroup>
        <S.InputGroup>
          <Input
            id="objective"
            name="objective"
            type="text"
            label="Objetivo"
            value={formik.values.objective}
            error={formik.errors.objective}
            onChange={formik.handleChange}
          />
        </S.InputGroup>
        <S.InputGroup>
          <Input
            id="main_phone"
            name="main_phone"
            type="text"
            label="Telefone Principal"
            placeholder="(99) 9 9999 9999"
            value={formik.values.main_phone}
            error={formik.errors.main_phone}
            onChange={formik.handleChange}
          />
          <Input
            id="secondary_phone"
            name="secondary_phone"
            type="text"
            label="Telefone Secundário"
            placeholder="(99) 9 9999 9999"
            value={formik.values.secondary_phone}
            error={formik.errors.secondary_phone}
            onChange={formik.handleChange}
          />
        </S.InputGroup>
        <S.InputGroup>
          <Input
            id="main_email"
            name="main_email"
            type="text"
            label="Email Principal"
            placeholder="exemplo@examplo.com"
            value={formik.values.main_email}
            error={formik.errors.main_email}
            onChange={formik.handleChange}
          />
          <Input
            id="secondary_email"
            name="secondary_email"
            type="text"
            label="Email Secundário"
            placeholder="exemplo@examplo.com"
            value={formik.values.secondary_email}
            error={formik.errors.secondary_email}
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
        <S.Button onClick={() => props.resetUserType()}>VOLTAR</S.Button>
        <S.Button type="submit">SALVAR</S.Button>
      </S.ButtonGroup>
    </S.Form>
  )
}

export default CreateOngForm
