'use client';

import { QueryClientProvider, QueryClient } from 'react-query';

export default function Providers({ children }: React.PropsWithChildren) {
  const client = new QueryClient();

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
