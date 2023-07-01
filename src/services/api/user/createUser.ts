import client from '@/services/api'
import * as T from './@types/ICreateUser'

const createUser = async (
  payload: T.ICreateUserPayload
): Promise<T.ICreateUserResponse> => {
  const response = await client.post('/user/', payload)

  return response.data
}

export default createUser
