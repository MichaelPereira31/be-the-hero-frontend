export const requiredError = (name: string) => {
  return `"${name}" is required!`
}

export const emailError = (name: string) => {
  return `"${name}" is not a valid email!`
}

export const confirmationFieldError = (name: string, confirmName: string) => {
  return `"${confirmName}" should be equal to "${name}"`
}
