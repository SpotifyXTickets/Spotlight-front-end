import Head from 'next/head'
import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const Layout: React.FC<{
  children: React.ReactNode
}> = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>{`Spotlight.`}</title>
      </Head>
      {children}
    </>
  )
}

export default Layout
