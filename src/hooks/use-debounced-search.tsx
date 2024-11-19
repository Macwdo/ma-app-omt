import { useEffect, useState } from 'react'

export function useDebouncedSearch(initialValue: string, delay: number) {
  const [search, setSearch] = useState(initialValue)
  const [debouncedSearch, setDebouncedSearch] = useState(initialValue)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [search, delay])

  return { search, setSearch, debouncedSearch }
}
