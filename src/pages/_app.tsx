import { NextPage } from 'next'
// import Layout from "../app/layout";
import { ReactElement, ReactNode } from 'react'
import { AppProps } from 'next/app'
import UserProvider from '@/providers/UserProvider'
import Cookies from 'cookies'
import { CookiesProvider } from 'react-cookie'
import Layout from '@/components/Layout'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Layout>
      {Component.name === 'SpotifyAuthorizer' ? (
        <Component {...pageProps} />
      ) : (
        <CookiesProvider>
          <UserProvider>
            <Component {...pageProps} />
          </UserProvider>
        </CookiesProvider>
      )}
    </Layout>
  )
}
