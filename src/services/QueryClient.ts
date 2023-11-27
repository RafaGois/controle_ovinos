import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 60, //60 segundos
            retry: 3,
        }
    }
})