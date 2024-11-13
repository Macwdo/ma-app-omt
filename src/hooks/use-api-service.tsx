import { useNavigate } from 'react-router-dom'
import api from '@/services/api-service'

export const useApiService = () => {
  const navigate = useNavigate()

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        navigate('/auth/login')
      }
      return Promise.reject(error)
    }
  )

  return api
}
