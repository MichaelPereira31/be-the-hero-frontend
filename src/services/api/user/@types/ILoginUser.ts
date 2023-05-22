import { IResponse } from '@/services/api/@types'

export interface ILoginUserPayload {
  email: string
  password: string
}

export type ILoginUserResponse = IResponse<string>
