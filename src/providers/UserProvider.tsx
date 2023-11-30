import { createContext, useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import { NextPage } from 'next'
import { useSetRedirctUrl } from '@/hooks/useSetRedirectUrl'

type User = {
  country: string
  display_name: string
  email: string
  explicit_content: {
    filter_enabled: boolean
    filter_locked: boolean
  }
  external_urls: {
    spotify: string
  }
  followers: {
    href: string | null
    total: number
  }
  href: string
  id: string
  images: {
    url: string
    height: number
    width: number
  }[]
  product: string
  type: string
  uri: string
}

type PageProps = {
  api_access_token: string
}

export const UserContext = createContext<{
  user?: User
  refreshUser: () => Promise<void>
}>({ user: undefined, refreshUser: async () => {} })

export const UserProvider: NextPage<{ children: React.ReactNode }> = (
  props,
) => {
  const [user, setUser] = useState<User>()
  useSetRedirctUrl()

  const getUser = async () => {
    const cookies = new Cookies()
    const accessToken = cookies.get('twix_access_token')

    const apiHost = process.env.NEXT_PUBLIC_API_HOST || 'http://localhost:8000'

    if (!accessToken) {
      setUser(undefined)
      return
    }

    fetch(`${apiHost}/user`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(async (res) => {
        if (res.status === 401) {
          window.location.href = `/spotify_authorizer`
          return
        }
        console.log(res)
        const data = (await res.json()) as User
        setUser(data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    try {
      getUser()
    } catch (err) {
      setUser(undefined)
    }
  }, [])

  return (
    <UserContext.Provider
      value={{
        user: user,
        refreshUser: getUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider
