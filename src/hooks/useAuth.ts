'use client'
import React, { useEffect, useState } from 'react'
import { Cookies, useCookies } from 'next-client-cookies'
import { verifyJwtToken } from '@/libs/auth'
import { JWTPayload } from 'jose/dist/types/types'

export const useAuth = () => {
  const [auth, setAuth] = useState<JWTPayload | null>(null)
  const cookies = useCookies()

  const getVerifiedToken = async (cookies: Cookies) => {
    const token = cookies.get('twix_access_token') ?? null
    console.log(cookies.get('twix_access_token'))
    const verifiedToken = await verifyJwtToken(token ?? '')

    setAuth(verifiedToken)
  }

  useEffect(() => {
    getVerifiedToken(cookies)
  }, [cookies])

  return auth
}
