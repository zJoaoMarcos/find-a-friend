"use client";

import React from "react";
import { AuthProvider } from "./auth";
import { QueryClientProvider } from "./queryClient";
import { RouterProvider } from "./router";
import { Toaster } from "sonner";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => { 
    setIsClient(true)
  }, [])

  if (isClient) return (
    <QueryClientProvider>
      <AuthProvider>
        <RouterProvider>
          {children}
          <Toaster richColors />
        </RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};
