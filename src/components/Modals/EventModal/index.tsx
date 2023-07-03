import { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

import BaseModal from '@/components/BaseModal'
import * as S from './styles'
import Input from '@/components/Inputs'
import { Button, InputGroup } from '@/components/Forms/styles'

type TEventModalProps = {
  setModalIsOpen: (value: boolean) => void
  modalIsOpen: boolean
}

type TEventPayload = {
  title: string
  description: string
  goal: string
  role: string
}

const schema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  goal: yup.string().required(),
  role: yup.string().required()
})

const EventModal = (props: TEventModalProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleCreate = () => {
    setIsLoading(true)
    setTimeout(() => {
      console.log('Evento Criado')
      setIsLoading(false)
    }, 300)
  }

  const formik = useFormik<TEventPayload>({
    initialValues: { title: '', description: '', role: '', goal: '' },
    validateOnBlur: true,
    validationSchema: schema,
    validateOnChange: true,
    onSubmit: handleCreate
  })

  return (
    <BaseModal
      isOpen={props.modalIsOpen}
      setIsOpen={props.setModalIsOpen}
      noCloseButton
    >
      <S.Body>
        <S.Content onSubmit={formik.handleSubmit}>
          <Input
            id="title"
            name="title"
            type="text"
            label="Titulo"
            value={formik.values.title}
            error={formik.errors.title}
            onChange={formik.handleChange}
          />
          <Input
            id="description"
            name="description"
            type="text"
            label="Descrição"
            value={formik.values.description}
            error={formik.errors.description}
            onChange={formik.handleChange}
          />
          <InputGroup>
            <Input
              id="goal"
              name="goal"
              type="text"
              label="Objetivo"
              value={formik.values.goal}
              error={formik.errors.goal}
              onChange={formik.handleChange}
            />
            <Input
              id="role"
              name="role"
              type="text"
              label="Papel"
              value={formik.values.role}
              error={formik.errors.role}
              onChange={formik.handleChange}
            />
          </InputGroup>
          <S.ModalButton>
            <S.Button type="submit">Criar</S.Button>
          </S.ModalButton>
        </S.Content>
      </S.Body>
    </BaseModal>
  )
}

export default EventModal
