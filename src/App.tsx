import { RouterProvider } from 'react-router-dom';
import router from '@/routes/route';
import ToastProvider from './components/common/Toast/ToastProvider';

function App() {
  return (
    <ToastProvider>
      <RouterProvider router={router} />
    </ToastProvider>
  );
}

export default App;
