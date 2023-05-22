import { IMessageConf, TOAST_EVENT_NAME } from '@/components/ToastMessage'

export const addNewToast = (conf: IMessageConf) => {
  if (!document) return

  const newToastEvent = new CustomEvent<IMessageConf>(TOAST_EVENT_NAME, {
    detail: conf
  })
  document.dispatchEvent(newToastEvent)
}
