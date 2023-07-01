import * as yup from 'yup'
import AddressSchema from '../schemas'
import {
  emailError,
  phoneNumberError,
  requiredError
} from '@/utils/yup/messages'
import { phoneRegexValidation } from '@/utils/yup/validations'

const CreateOngSchema = yup.object().shape({
  name: yup.string().required(requiredError('Nome')),
  description: yup.string().required(requiredError('Descrição')),
  objective: yup.string().required(requiredError('Objetivo')),
  main_phone: yup
    .string()
    .required(requiredError('Telefone Principal'))
    .matches(phoneRegexValidation, phoneNumberError('Telefone Principal')),
  secondary_phone: yup
    .string()
    .required(requiredError('Telefone Secundário'))
    .matches(phoneRegexValidation, phoneNumberError('Telefone Secundário')),
  main_email: yup
    .string()
    .email(emailError('Email Principal'))
    .required(requiredError('Email Principal')),
  secondary_email: yup
    .string()
    .email(emailError('Email Secundário'))
    .required(requiredError('Email Secundário')),
  address: AddressSchema
})

export default CreateOngSchema
