import React, { createContext, useContext, useEffect } from "react";

import { Organization } from "@/@types/Organzation";
import { signIn } from "@/services/orgs";
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { cookieValues } from "@/@constants/cookie-values";
import { useRouter } from "next/navigation";
import { ORG_PROFILE } from "@/@constants/requests-url";
import { api } from "@/services/api";

interface AuthContextData {
  organization: Organization | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext({} as AuthContextData);

export const logout = () => {
  // clean cookies and local/session storage
  // redirect to signIn page
  /* destroyCookie(undefined, cookieValues.accessToken) */
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [organization, setOrganization] = React.useState<Organization | null>(
    null
  );
  const isAuthenticated = !!organization;

  const router = useRouter()

  const login = async (email: string, password: string) => {
    try {
      const { organization, accessToken } = await signIn(email, password);

      setCookie(undefined, cookieValues.accessToken, accessToken, {
        maxAge: 60 * 60 * 1 * 24, // 24 hours
      })

      api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

      setOrganization(organization);
      
      router.push(ORG_PROFILE)
    } catch (error) {

    }
  };

  return (
    <AuthContext.Provider
      value={{ organization, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
