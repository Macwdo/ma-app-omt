// src/services/apiService.ts
import axios, { AxiosError } from 'axios'
import { Token } from './user-service'

const ApiUrl = 'http://localhost:8000/api/'

const api = axios.create({
  baseURL: ApiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token') ?? null

  const accessToken = token ? (JSON.parse(token) as Token) : null
  if (token) {
    config.headers.Authorization = `Bearer ${accessToken?.access}`
  }
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const currentUrl = window.location.pathname
    if (error.response?.status === 401 && currentUrl !== '/auth/login') {
      window.location.href = '/auth/login'
    }
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    return Promise.reject(error)
  }
)

export default api
