import { ICompleteUserFormData } from '.'

export const getInitialValues = (): ICompleteUserFormData => {
  return {
    name: '',
    lastName: '',
    address: {
      street: '',
      number: 0,
      neighborhood: '',
      city: '',
      state: '',
      complement: '',
      reference: '',
      google_coordinates: ''
    }
  }
}
