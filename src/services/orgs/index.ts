import { api } from "../api";
import { GET_ORGS_LOCATIONS } from "../routes";

interface GetOrgsLocationsResponse {
  locations: Array<{name: string, cities: Array<{name: string}>}>
}

export async function getOrgsLocations() {
  try {
    const response = await api.get<GetOrgsLocationsResponse>(GET_ORGS_LOCATIONS)

    const { data } = response

    return data
  } catch (error) {
    console.log(error)
    throw 'Falha tente novamente'
  }
}