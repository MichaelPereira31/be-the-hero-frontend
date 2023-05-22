import client from '@/services/api'
import * as T from './@types/ILoginUser'

const loginUser = async (
  payload: T.ILoginUserPayload
): Promise<T.ILoginUserResponse> => {
  const response = await client.post('/user/authenticate/', payload)

  return response.data
}

export default loginUser
