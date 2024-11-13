import { useNavigate } from 'react-router-dom'
import { UserAuthForm } from './components/user-auth-form'
import { useEffect } from 'react'
import useLocalStorage from '@/hooks/use-local-storage'

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
        <div className='lg:p-8'>
          <div className='mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[350px]'>
            <div className='flex flex-col space-y-2 text-left'>
              <h1 className='text-2xl font-semibold tracking-tight'>Login</h1>
              <p className='text-sm text-muted-foreground'>
                Informe seu email e senha para acessar a plataforma.
                <br />
              </p>
            </div>
            <UserAuthForm />
          </div>
        </div>
        <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
          <div className='absolute inset-0 bg-zinc-900' />

          <div className='relative z-20 mt-auto'>
            <blockquote className='space-y-2'>
              <p className='text-lg'>
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className='text-sm'>Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </>
  )
}
