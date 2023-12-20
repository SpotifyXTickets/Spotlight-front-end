export const getApiHost = () => {
  return process.env.NEXT_PUBLIC_API_HOST ?? 'http://localhost:8000'
}
