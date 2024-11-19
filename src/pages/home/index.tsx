import { Button } from '@/components/custom/button'
import { Layout } from '@/components/custom/layout'
import { Search } from '@/components/search'
import ThemeSwitch from '@/components/theme-switch'
import { Input } from '@/components/ui/input'
import { UserNav } from '@/components/user-nav'
import { useApiService } from '@/hooks/use-api-service'
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
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  const [debouncedSearch, setDebouncedSearch] = useState(search)
  const [user, setUser] = useState<MeUser | null>(null)
  const apiService = useApiService()

  const fetchUser = async () => {
    const meUser = await apiService.get<MeUser>('/auth/me/')
    setUser(meUser.data)
  }

  const fetchRickAndMorty = async (name: string) => {
    const url = name
      ? `https://rickandmortyapi.com/api/character/?name=${name}&count=2`
      : 'https://rickandmortyapi.com/api/character'

    const response = await fetch(url)
    const result = await response.json()
    return result.results
  }

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search)
    }, 300) // Adjust delay as needed

    return () => {
      clearTimeout(handler)
    }
  }, [search])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchRickAndMorty(debouncedSearch)
      setData(result)
    }

    if (debouncedSearch !== '') {
      fetchData()
    }
  }, [debouncedSearch])

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
        <HomeContext.Provider
          value={{ search, setSearch }}
        ></HomeContext.Provider>
      </Layout.Body>
    </Layout>
  )
}

const ChildComponent = () => {
  const { setSearch } = useContext(HomeContext)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <Input onChange={handleSearch} />
      <Button onClick={() => setSearch('')}>Clear</Button>
    </div>
  )
}
