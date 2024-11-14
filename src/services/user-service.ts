import api from './api-service'

export type MeUser = {
  firstName: string
  lastName: string
  email: string
  fullName: string
  image: URL | null
}

export type Token = {
  access: string
  refresh: string
}

export type User = MeUser & Token

export const getMeUser = async () => {
  const response = await api.get<MeUser>('/auth/me/')
  return response.data
}

export const getToken = async (email: string, password: string) => {
  const response = await api.post<Token | null>('/auth/token/', {
    email,
    password,
  })

  return response.data
}
