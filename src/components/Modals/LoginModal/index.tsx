import { useState } from 'react'
import { useFormik } from 'formik'
import Router from 'next/router'
import * as yup from 'yup'

import BaseModal from '@/components/BaseModal'
import {
  ModalBody,
  ModalDescription,
  ModalOptions,
  ModalText,
  ModalLink,
  Form,
  ModalButtom
} from '../styles'
import Input from '@/components/Inputs'
import RegisterModal from '../RegisterModal'
import { ILoginUserPayload } from '@/services/api/user/@types/ILoginUser'
import { emailError, requiredError } from '@/utils/yup/messages'

import logoMini from '@/assets/img/simple-logo.png'
import * as S from './styles'
import loginUser from '@/services/api/user/loginUser'

type TLoginModalProps = {
  setModalIsOpen: (value: boolean) => void
  modalIsOpen: boolean
}

const schema = yup.object({
  email: yup
    .string()
    .required(requiredError('Email'))
    .email(emailError('Email')),
  password: yup.string().required(requiredError('Password'))
})

const LoginModal = (props: TLoginModalProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleRegisterModal = () => {
    setIsOpen(true)
  }

  const handleLogin = (values: ILoginUserPayload) => {
    setIsLoading(true)
    loginUser(values)
      .then((data) => {
        // TODO: menage token with cookies
        console.log(data)
        Router.push('/profile/complete-registration')
      })
      .catch(() => formik.setFieldError('email', 'Not registred email.'))
      .finally(() => setIsLoading(false))
  }

  const formik = useFormik<ILoginUserPayload>({
    initialValues: { email: '', password: '' },
    validationSchema: schema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: handleLogin
  })

  return (
    <BaseModal
      isOpen={props.modalIsOpen}
      setIsOpen={props.setModalIsOpen}
      style={{
        height: '560px'
      }}
    >
      <ModalBody data-testid="login-modal">
        <ModalDescription>
          Bem vindo ao
          <S.ImageSimpleLogo src={logoMini.src} />
        </ModalDescription>

        <Form onSubmit={formik.handleSubmit}>
          <Input
            id="email"
            name="email"
            type="text"
            label="Email / Usuário"
            value={formik.values.email}
            error={formik.errors.email}
            onChange={formik.handleChange}
          />
          <Input
            id="password"
            name="password"
            type="password"
            label="Senha"
            showButton
            value={formik.values.password}
            error={formik.errors.password}
            onChange={formik.handleChange}
          />

          <ModalButtom variant="secondary" isLoading={isLoading} type="submit">
            Entrar
          </ModalButtom>
        </Form>

        <ModalOptions>
          <ModalLink>Esqueceu a senha?</ModalLink>
          <ModalText>
            Não tem uma conta?{' '}
            <ModalLink onClick={handleRegisterModal}>Cadastre-se</ModalLink>
            <RegisterModal modalIsOpen={isOpen} setModalIsOpen={setIsOpen} />
          </ModalText>
        </ModalOptions>
      </ModalBody>
    </BaseModal>
  )
}

export default LoginModal
