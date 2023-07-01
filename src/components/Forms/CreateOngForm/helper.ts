export const getInitialValues = () => {
  return {
    name: '',
    description: '',
    objective: '',
    main_phone: '',
    secondary_phone: '',
    main_email: '',
    secondary_email: '',
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
