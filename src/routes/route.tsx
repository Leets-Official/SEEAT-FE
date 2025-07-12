import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/home';
import MyPage from '@/pages/my';
import Signup from '@/pages/signup';
//테스트용
import BottomNavigationExamples from '@/components/examples/BottomNavigationExamples';

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
  {
    path: '/bottom-test', //테스트용
    element: <BottomNavigationExamples />,
  },
]);

export default router;
