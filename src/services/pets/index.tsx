import { api } from "../api"

interface GetPetsParams { 
  state: string
  city: string
}

export async function getPets(params: GetPetsParams) {
  try {
    const response = await api.get(GET_PETS, {
      params
    })
  } catch (error) {
    
  }
} 