import * as yup from 'yup'
import AddressSchema from '../schemas'
import { requiredError } from '@/utils/yup/messages'

const CompleteUserSchema = yup.object().shape({
  name: yup.string().required(requiredError('Nome')),
  lastName: yup.string().required(requiredError('Sobrenome')),
  address: AddressSchema
})

export default CompleteUserSchema
