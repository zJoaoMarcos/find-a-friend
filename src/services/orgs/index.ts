import { api } from "../api";
import { GET_ORGS_LOCATIONS } from "../routes";

/* interface getOrgsLocationsResponse {
  locations: Array<{name: string, cities: Array<{name: string}>}>
} */

export async function getOrgsLocations() {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))


    return [
      
        {
          name: "SP",
          cities: [
            { name: "São Caetano do Sul" },
            { name: "Santo André" },
            { name: "São Paulo" },
          ],
        },
        {
          name: "RJ",
          cities: [
            { name: "Rio de Janeiro" }, 
            { name: "Teresópolis" },
            { name: "Nova Iguaçu" },
          ],
        },
        {
          name: "MG",
          cities: [
            { name: "Belo Horizonte"},
          ]
        },
        {
          name: "BA",
          cities: [
            { name: "Salvador"},
          ]
        }
      ]
    /* const response = await api.get(GET_ORGS_LOCATIONS)

    const { data } = response

    return data */
  } catch (error) {
    console.log(error)
    throw 'Falha tente novamente'
  }
}