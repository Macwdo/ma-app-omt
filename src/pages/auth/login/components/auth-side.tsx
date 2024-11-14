import { UserAuthForm } from './user-auth-form'

export function AuthSide() {
  return (
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
  )
}
