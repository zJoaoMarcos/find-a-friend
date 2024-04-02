"use client"

import React, { createContext, useContext, useEffect } from "react";

import { Organization } from "@/@types/Organzation";
import { getOrganizationProfile, signIn } from "@/services/orgs";
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { cookieValues } from "@/@constants/cookie-values";
import { useRouter } from "next/navigation";
import { api } from "@/services/api";
import { toast } from "sonner";
import { APP_ROUTES } from "@/@constants/app-routes";

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

    destroyCookie(undefined, cookieValues.accessToken, {
      path: '/'
    })
    destroyCookie(undefined, cookieValues.refreshToken, {
      path: '/'
    })

    window.location.replace('/orgs/sign-in')
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
        path: '/',
      })

      api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

      setOrganization(organization);
      
      toast.success('Login realizado com sucesso', { 
        position: 'top-right'
      })
      
      router.push(APP_ROUTES.private.profile)

    } catch (error: any) {
      toast.error(error?.message, {
        position: 'top-right',
        duration: 2000
      })
    }
  };

  useEffect(() => {
    const { [cookieValues.accessToken]: accessToken } = parseCookies();

    if (accessToken) { 
      getOrganizationProfile().then(res => setOrganization(res.organization))
    }
  }, [isAuthenticated])

  return (
    <AuthContext.Provider
      value={{ organization, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
