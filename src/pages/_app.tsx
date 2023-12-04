import { QueryClientProvider } from '@tanstack/react-query';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { queryClient } from '../services/QueryClient';
import { AuthProvider } from '../data/context/AuthContext';
import { AppProvider } from '../data/context/AppContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
