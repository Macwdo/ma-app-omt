import { LawsuitCard } from '@/components/application/lawsuit-card'
import { Layout } from '@/components/custom/layout'
import { Input } from '@/components/ui/input'

import { useApiService } from '@/hooks/use-api-service'
import { useDebouncedSearch } from '@/hooks/use-debounced-search'
import { MeUser } from '@/services/user-service'
import { createContext, useContext, useEffect, useState } from 'react'

type HomeContextType = {
  search: string
  setSearch: (search: string) => void
}

const HomeContext = createContext<HomeContextType>({
  search: '',
  setSearch: () => {},
})

export default function Home() {
  const { search, debouncedSearch, setSearch } = useDebouncedSearch('', 500)

  return (
    <Layout fixed>
      <Layout.Header>
        <div>
          <span className='text-xl font-bold'>Home </span>
        </div>
      </Layout.Header>
      <Layout.Body>
        <HomeContext.Provider value={{ search: debouncedSearch, setSearch }}>
          <div className='flex flex-wrap'>
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className='w-full p-2 sm:w-1/2 md:w-1/2 lg:w-1/3'
              >
                <LawsuitCard />
              </div>
            ))}
          </div>
        </HomeContext.Provider>
      </Layout.Body>
    </Layout>
  )
}
