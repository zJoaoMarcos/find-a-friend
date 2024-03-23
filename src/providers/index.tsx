"use client";

import { AuthProvider } from "./auth";
import { QueryClientProvider } from "./queryClient";
import { RouterProvider } from "./router";
import { Toaster } from "sonner";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
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
