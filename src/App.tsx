import { RouterProvider } from 'react-router-dom';
import router from '@/routes/route';
import { Modal } from '@/components'; 

function App() {
  console.log('App 렌더됨');
  return (
    <>
      <RouterProvider router={router} />
      <Modal />
    </>
  );
}

export default App;