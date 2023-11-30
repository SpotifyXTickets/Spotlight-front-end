'use client'
import Cookies from 'universal-cookie'
import { useRouter } from 'next/router'
import { verifyJwtToken } from '@/libs/auth'
import { useEffect, useMemo } from 'react'

export const useSetRedirctUrl = (): void => {
  const cookies = useMemo(() => new Cookies(), [])
  const router = useRouter()

  useEffect(() => {
    cookies.set('twix_redirect_url', router.pathname, {
      path: '/',
    })
  }, [router, cookies])

  return
}
