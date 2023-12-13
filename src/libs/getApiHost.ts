export const getApiHost = () => {
  return (
    process.env.NEXT_PUBLIC_API_HOST ??
    'https://spotifyxticketswap-backend.vercel.app'
  )
}
