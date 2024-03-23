import { Organization } from "@/@types/Organzation";
import { api } from "../api";
import { GET_ORGS_LOCATIONS, ORG_PROFILE, SIGN_IN } from "@/@constants/requests-url";

interface SignInResponse { 
  organization: Organization;
  accessToken: string;
}

export async function signIn(email: string, password: string) { 

  try { 
    const response = await api.post<SignInResponse>(SIGN_IN, { 
      email,
      password
    }) 

    const { data } = response
     
    return data
  } catch (error) { 
    throw 'Falha tente novamente'
  }
}

interface OrganizationProfileResponse { 
  organization: Organization
}

export async function getOrganizationProfile() { 
  try {
    const response = await api.get<OrganizationProfileResponse>(ORG_PROFILE)

    const { data } = response

    return data
  } catch (error) {
    throw 'Falha tente novamente'
  }
}
interface GetOrgsLocationsResponse {
  locations: Array<{name: string, cities: Array<{name: string}>}>
}

export async function getOrgsLocations() {
  try {
    const response = await api.get<GetOrgsLocationsResponse>(GET_ORGS_LOCATIONS)

    const { data } = response

    return data
  } catch (error) {
    throw 'Falha tente novamente'
  }
}