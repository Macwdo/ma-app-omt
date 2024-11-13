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
  const accessToken = token ? (JSON.parse(token) as Token).access : null
  if (token) {
    console.log('token', accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

// Add a response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const currentUrl = window.location.pathname
    if (error.response?.status === 401 && currentUrl !== '/auth/login') {
      localStorage.removeItem('user')
      localStorage.removeItem('token')

      window.location.href = '/auth/login'
    }

    return Promise.reject(error)
  }
)

export default api
