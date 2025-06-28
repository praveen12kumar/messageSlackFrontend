import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Modals } from '@/components/organisms/modals/Modals';
import { AppContextProvider } from '@/context/AppContextProvider';
import { AppRoutes } from '@/Routes';
function App() {

    const queryClient = new QueryClient();

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <AppRoutes/>
        <Modals/>
      </AppContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
