"use client"

import { queryClient } from '@/services/queryClient'
import { QueryClientProvider } from '@tanstack/react-query'

export function TanstackQuery({children}: {children: React.ReactNode}) { 
 return (
   <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
 );
}