import { RouterProvider } from 'react-router-dom';
import router from '@/routes/route';
<<<<<<< HEAD
<<<<<<< HEAD
import { Modal } from '@/components'; 
=======
import { Modal } from '@/components';
import ToastProvider from './components/common/Toast/ToastProvider';
>>>>>>> 6ef5435858e3f72fe579945c287a12aa06b45e5a
=======
import { Modal } from '@/components';
import ToastProvider from './components/common/Toast/ToastProvider';
>>>>>>> 3ef9a58065f58eef91c9ba508522f10f20288fe1

function App() {
  console.log('App 렌더됨');
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <>
      <RouterProvider router={router} />
      <Modal />
    </>
=======
=======
>>>>>>> 3ef9a58065f58eef91c9ba508522f10f20288fe1
    <ToastProvider>
      <RouterProvider router={router} />
      <Modal />
    </ToastProvider>
<<<<<<< HEAD
>>>>>>> 6ef5435858e3f72fe579945c287a12aa06b45e5a
=======
>>>>>>> 3ef9a58065f58eef91c9ba508522f10f20288fe1
  );
}

export default App;
