import { IUser, TOng, TStatus } from '.'
import { IResponse } from '@/services/api/@types'

export interface ICreateUserPayload {
  email: string
  lastName?: string
  name?: string
  password: string
  status?: TStatus
  type?: TOng
}

export type ICreateUserResponse = IResponse<IUser>
