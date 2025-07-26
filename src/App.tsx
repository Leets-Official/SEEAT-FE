import { RouterProvider } from 'react-router-dom';
import router from '@/routes/route';
import { Modal } from '@/components';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Modal />
    </>
  );
}

export default App;
