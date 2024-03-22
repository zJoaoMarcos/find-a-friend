"use client"

import { queryClient } from '@/services/queryClient'
import { QueryClientProvider as TanstackQueryProvider  } from '@tanstack/react-query'

export function QueryClientProvider({children}: {children: React.ReactNode}) { 
  return <TanstackQueryProvider client={queryClient}>{children}</TanstackQueryProvider>
}