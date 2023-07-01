export const requiredError = (name: string) => {
  return `"${name}" é obrigatório!`
}

export const emailError = (name: string) => {
  return `"${name}" não é um email válido!`
}

export const confirmationFieldError = (name: string, confirmName: string) => {
  return `"${confirmName}" deve ser igual a "${name}"`
}

export const phoneNumberError = (name: string) => {
  return `"${name}" deve ser um número válido`
}
