"use client";

import { AuthProvider } from "./auth";
import { QueryClientProvider } from "./queryClient";
import { RouterProvider } from "./router";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider>
      <AuthProvider>
        <RouterProvider>{children}</RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};
