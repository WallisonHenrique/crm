import React from 'react'
import { AppProps } from 'next/app'

import GlobalStyle from '../styles/Global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
