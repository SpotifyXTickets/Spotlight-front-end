import { SignJWT } from 'jose'
import { GetServerSideProps, NextPage } from 'next'
// import Cookies from "cookies";
import Cookies from 'universal-cookie'
import { getJwtSecretKey } from '@/libs/auth'
import { useEffect } from 'react'
import { getApiHost } from '@/libs/getApiHost'

type PageProps = {
  success: boolean
  twix_access_token?: string
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context,
) => {
  const { code, state } = context.query
  const apiHost = getApiHost()

  let props = { success: false } as PageProps
  const cookies = new Cookies()

  if (code !== undefined && state !== undefined) {
    await fetch(`${apiHost}/authorize/spotify?state=${state}&code=${code}`)
      .then(async (res) => {
        const data = (await res.json()) as { accessToken: string }

        props = { success: true, twix_access_token: data.accessToken }
        const cookies = new Cookies()
        cookies.set('twix_access_token', data.accessToken, {
          path: '/',
          sameSite: 'strict',
        })

        const twixRedirectUrl = cookies.get('twix_redirect_url')
        if (twixRedirectUrl) {
          return {
            redirect: {
              permanent: false,
              destination: twixRedirectUrl,
            },
            props: { success: false, twix_access_token: undefined },
          }
        } else {
          return {
            redirect: {
              permanent: false,
              destination: '/playlist_selection',
            },
            props: { success: false, twix_access_token: undefined },
          }
        }
      })
      .catch((err) => {
        console.error(err)
      })

    return { props }
  }

  return {
    redirect: {
      permanent: false,
      destination: `${apiHost}/authorize`,
    },
    props: { success: false, twix_access_token: undefined },
  }
}
export const SpotifyAuthorizer: NextPage<PageProps> = (props) => {
  useEffect(() => {
    if (props.success) {
      const cookies = new Cookies()
      cookies.set('twix_access_token', props.twix_access_token, {
        path: '/',
        sameSite: 'strict',
      })

      const twixRedirectUrl = cookies.get('twix_redirect_url')
      if (twixRedirectUrl) {
        cookies.remove('twix_redirect_url')
        window.location.href = twixRedirectUrl
      } else {
        window.location.href = '/playlist_selection'
      }
    }
  }, [props])
  if (props.success) {
    return <></>
  }

  return <>Authentication failed</>
}

export default SpotifyAuthorizer
