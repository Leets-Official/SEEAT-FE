import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { queryClient } from './libs/queryClient';
import router from '@/routes/route';
import ToastProvider from './components/common/Toast/ToastProvider';
import { FilterProvider } from '@/contexts/FilterContext'; 

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <FilterProvider> 
          <RouterProvider router={router} />
        </FilterProvider>
      </ToastProvider>
    </QueryClientProvider>
  );
}

export default App;
