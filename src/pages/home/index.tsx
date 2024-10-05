import { Layout } from '@/components/custom/layout'
import { Search } from '@/components/search'
import ThemeSwitch from '@/components/theme-switch'
import { UserNav } from '@/components/user-nav'

export default function Home() {
  return (
    <Layout fixed>
      <Layout.Header>
        <div className='flex w-full items-center justify-between'>
          <Search />
          <div className='flex items-center space-x-4'>
            <ThemeSwitch />
            <UserNav />
          </div>
        </div>
      </Layout.Header>
      <Layout.Body>
        <div className='flex h-full items-center justify-center'>
          <h1 className='text-4xl font-bold'>Welcome to Next.js</h1>
        </div>
      </Layout.Body>
    </Layout>
  )
}
