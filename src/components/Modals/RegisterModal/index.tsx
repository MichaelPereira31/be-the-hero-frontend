import { useFormik } from 'formik'
import * as yup from 'yup'

import { ModalBody, ModalDescription, ModalButtom, Form } from '../styles'
import BaseModal from '@/components/BaseModal'
import Input from '@/components/Inputs/index'
import { ImageSimpleLogo } from '../LoginModal/styles'
import {
  confirmationFieldError,
  emailError,
  requiredError
} from '@/utils/yup/messages'

import logoMini from '@/assets/img/simple-logo.png'
import * as S from './styles'
import createUser from '@/services/api/user/createUser'
import { useState } from 'react'
import { addNewToast } from '@/utils/toast/addMessage'

type TRegisterModalProps = {
  setModalIsOpen: (value: boolean) => void
  modalIsOpen: boolean
}

type TCreateUser = {
  email: string
  confirmEmail: string
  password: string
  confirmPassword: string
}

const schema = yup.object({
  email: yup
    .string()
    .required(requiredError('Confirme Email'))
    .email(emailError('Email')),
  confirmEmail: yup
    .string()
    .required(requiredError('Confirme Email'))
    .email(emailError('Confirme Email'))
    .oneOf(
      [yup.ref('email')],
      confirmationFieldError('Email', 'Confirme Email')
    ),
  password: yup.string().required(requiredError('Senha')),
  confirmPassword: yup
    .string()
    .required(requiredError('Confirme Senha'))
    .oneOf(
      [yup.ref('password')],
      confirmationFieldError('Senha', 'Confirme Senha')
    )
})

const RegisterModal = (props: TRegisterModalProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (values: TCreateUser) => {
    setIsLoading(true)
    createUser({
      email: values.email,
      password: values.password
    })
      .then(() => {
        addNewToast({ message: 'User created successfully', type: 'success' })
        props.setModalIsOpen(false)
      })
      .catch(() =>
        addNewToast({
          message: 'Unable to create user. Try again later!',
          type: 'error'
        })
      )
      .finally(() => setIsLoading(false))
  }

  const formik = useFormik<TCreateUser>({
    initialValues: {
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: handleSubmit,
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: schema,
    enableReinitialize: true
  })

  return (
    <BaseModal
      isOpen={props.modalIsOpen}
      setIsOpen={props.setModalIsOpen}
      style={{
        height: '620px'
      }}
    >
      <ModalBody data-testid="register-modal">
        <ModalDescription>
          Bem vindo ao
          <ImageSimpleLogo src={logoMini.src} />
        </ModalDescription>

        <Form onSubmit={formik.handleSubmit}>
          <S.InputGroup>
            <Input
              id="email"
              name="email"
              type="text"
              label="E-mail"
              value={formik.values.email}
              error={formik.errors.email}
              onChange={formik.handleChange}
            />
            <Input
              id="confirmEmail"
              name="confirmEmail"
              type="text"
              label="Confirme E-mail"
              value={formik.values.confirmEmail}
              error={formik.errors.confirmEmail}
              onChange={formik.handleChange}
            />
            <Input
              id="password"
              name="password"
              type="password"
              label="Senha"
              value={formik.values.password}
              error={formik.errors.password}
              onChange={formik.handleChange}
              showButton
            />
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label="Confirmar Senha"
              value={formik.values.confirmPassword}
              error={formik.errors.confirmPassword}
              onChange={formik.handleChange}
              showButton
            />
          </S.InputGroup>
          <ModalButtom variant="secondary" isLoading={isLoading} type="submit">
            Inscrever-se
          </ModalButtom>
        </Form>
      </ModalBody>
    </BaseModal>
  )
}

export default RegisterModal
