import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import useLocalStorage from '@/hooks/use-local-storage'
import { AuthSide } from './components/auth-side'
import { ContentSide } from './components/content-side'

export default function Login() {
  const [token] = useLocalStorage<string | null>({
    key: 'token',
    defaultValue: null,
  })
  const navigation = useNavigate()

  useEffect(() => {
    if (token) {
      navigation('/')
    }
  }, [token, navigation])

  return (
    <>
      <div className='container relative grid h-svh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0'>
        <AuthSide />
        <ContentSide />
      </div>
    </>
  )
}
