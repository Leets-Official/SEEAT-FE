import { RouterProvider } from 'react-router-dom';
import router from '@/routes/route';
<<<<<<< HEAD
import { Modal } from '@/components'; 
=======
import { Modal } from '@/components';
import ToastProvider from './components/common/Toast/ToastProvider';
>>>>>>> 6ef5435858e3f72fe579945c287a12aa06b45e5a

function App() {
  console.log('App 렌더됨');
  return (
<<<<<<< HEAD
    <>
      <RouterProvider router={router} />
      <Modal />
    </>
=======
    <ToastProvider>
      <RouterProvider router={router} />
      <Modal />
    </ToastProvider>
>>>>>>> 6ef5435858e3f72fe579945c287a12aa06b45e5a
  );
}

export default App;