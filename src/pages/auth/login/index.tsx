import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { AuthSide } from './components/auth-side'
import { ContentSide } from './components/content-side'

export default function Login() {
  const navigation = useNavigate()

  const checkUserTokens = () => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')
    const hasToken = token && user

    if (hasToken) {
      navigation('/')
    }
  }

  useEffect(() => {
    checkUserTokens()
  })

  return (
    <div className='container relative grid h-svh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <AuthSide />
      <ContentSide />
    </div>
  )
}
