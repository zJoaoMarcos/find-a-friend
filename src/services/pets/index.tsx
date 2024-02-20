import { api } from "../api"

import { GET_PETS } from "../routes"

interface GetPetsParams { 
  state: string | null
  city: string | null
}

export async function getPets(params: GetPetsParams) {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log(params)

    return [
      { id: 1, name: "Alfredo", photo: "alfredo.png" },
      { id: 2, name: "Francis", photo: "francis.png" },
      { id: 3, name: "Jameson", photo: "jameson.png" },
      { id: 4, name: "Lauren", photo: "lauren.png" },
      { id: 5, name: "Panqueca", photo: "panqueca.png" },
    ];

   /*  const response = await api.get(GET_PETS, {
      params
    }) */
  } catch (error) {
    console.log(error)
  }
} 