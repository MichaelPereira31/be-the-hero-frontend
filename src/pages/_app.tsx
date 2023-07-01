import GlobalStyles from '@/styles/global'
import type { AppProps } from 'next/app'

import ToastMessage from '@/components/ToastMessage'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <ToastMessage />
      <Component {...pageProps} />
    </>
  )
}

export default App
