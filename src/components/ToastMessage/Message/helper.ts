import { IMessageConf } from '..'

export const getNormalTitle = (type: IMessageConf['type']) => {
  switch (type) {
    case 'success':
      return 'Message'
    case 'error':
      return 'Erro'
  }
}
