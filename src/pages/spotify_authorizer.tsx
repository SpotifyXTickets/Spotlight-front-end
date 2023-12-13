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
    await fetch(
      `${apiHost}/authorize/spotify?state=${state}&code=${code}`,

      {
        referrerPolicy: 'strict-origin',
        referrer: 'http://localhost:3000',
      },
    )
      .then(async (res) => {
        let data = (await res.json()) as
          | { accessToken: string }
          | { status?: number; message: string }

        if (
          (data as { status?: number }).status !== undefined &&
          (data as { status?: number }).status !== 200
        ) {
          throw new Error((data as { status: number; message: string }).message)
          return { props }
        }
        data = data as { accessToken: string }

        console.log(data)
        props = { success: true, twix_access_token: data.accessToken ?? '' }
        const cookies = new Cookies()
        cookies.set('twix_access_token', data.accessToken, {
          path: '/',
          sameSite: 'strict',
        })

        console.log(props)

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
              destination: '/select-playlist',
            },
            props: { success: false, twix_access_token: undefined },
          }
        }
      })
      .catch((err) => {
        console.error(err)
        console.log(err.message)
        return { props }
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
        window.location.href = '/select-playlist'
      }
    }
  }, [props])
  if (props.success) {
    return <></>
  }

  return <>Authentication failed</>
}

export default SpotifyAuthorizer
