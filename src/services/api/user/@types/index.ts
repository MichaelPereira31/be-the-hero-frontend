export type TStatus = 'active' | 'inactive'
export type TOng = 'ong' | 'voluntary'

export interface IUser {
  id: string
  name: string
  lastName: string
  email: string
  status: TStatus
  type: TOng
  createdAt: string
  updatedAt: string
  addressId?: string
}
