import { cookieValues } from "@/@constants/cookie-values"
import { parseCookies } from "nookies";

export const checkIsAuthenticated = () => {
  const { [cookieValues.accessToken]: accessToken } = parseCookies();
  
  return !!accessToken
}