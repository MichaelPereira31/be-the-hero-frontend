import { requiredError } from '@/utils/yup/messages'
import * as yup from 'yup'

const AddressSchema = yup.object().shape({
  street: yup.string().required(requiredError('Rua')),
  number: yup.number().required(requiredError('Número')),
  neighborhood: yup.string().required(requiredError('Bairro')),
  city: yup.string().required(requiredError('Cidade')),
  state: yup.string().required(requiredError('Estado')),
  complement: yup.string(),
  reference: yup.string().required(requiredError('Referência'))
})

export default AddressSchema
