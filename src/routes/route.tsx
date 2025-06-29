import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/home';
import MyPage from '@/pages/my';
import Signup from '@/pages/signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Signup />,
  },
  {
    path: '/my',
    element: <MyPage />,
  },
  {
    path: '/home',
    element: <Home />,
  },
]);

export default router;
