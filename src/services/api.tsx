import axios, { isAxiosError } from "axios";
import { parseCookies, setCookie } from "nookies";

import { cookieValues } from "@/@constants/cookie-values";
import { REFRESH_TOKEN } from "@/@constants/requests-url";
import { logout } from "@/contexts/auth";

export const api = axios.create({
  baseURL: "http://localhost:3333/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use((request) => { 

  const headers = request.headers ?? {}

  const { [cookieValues.accessToken]: accessToken } = parseCookies();

  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`
  }

  return request
})

type FailedRequestQueue = {
  onSuccess: (newToken: string) => void
  onFailure: () => void
}

let isRefreshing = false;
let failedRequestsQueue: FailedRequestQueue[] = []

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (isAxiosError(error)) {
      const status = error.response?.status;
      const message = error.response?.data.message;

      if (status === 401 && message === "Token expired.") {
        const originalConfig = error.config;

        if (!isRefreshing) {
          isRefreshing = true;

          api
            .patch(REFRESH_TOKEN)
            .then((response) => {
              const { accessToken } = response.data;

              setCookie(undefined, cookieValues.accessToken, accessToken, {
                maxAge: 60 * 60 * 1 * 24, // 24 hours
              });


              failedRequestsQueue.forEach((request) =>
                request.onSuccess(accessToken)
              );
            })
            .catch((err) => {
              failedRequestsQueue.forEach((request) => request.onFailure());

              logout()
            })
            .finally(() => {
              failedRequestsQueue = [];

              isRefreshing = false
            })
        }

        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            onSuccess: (accessToken: string) => {
              if (originalConfig) {
                originalConfig.headers["Authorization"] = `Bearer ${accessToken}`;

                resolve(api(originalConfig))
              }
            },
            onFailure: () => {
              reject(error)
            }
          })
        })
      } else {
        logout()
      }
    }

    return Promise.reject(error);
  }
);
