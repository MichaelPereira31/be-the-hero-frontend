import 'jest-styled-components'
import '@testing-library/jest-dom'

jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '',
    query: {},
    asPath: ''
  }),
  __esModule: true
}))
