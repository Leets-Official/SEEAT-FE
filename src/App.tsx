import { RouterProvider } from 'react-router-dom';
import router from '@/routes/route';
import { Modal } from '@/components';
import ToastProvider from './components/common/Toast/ToastProvider';

function App() {
  console.log('App 렌더됨');
  return (
    <ToastProvider>
      <RouterProvider router={router} />
      <Modal />
    </ToastProvider>
  );
}

export default App;
