export interface IResponse<T> {
  code: number
  success: boolean
  data: T
}
