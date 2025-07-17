import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/home';
import MyPage from '@/pages/my';
import Signup from '@/pages/signup';
import ReviewTest from '@/components/examples/Reviewpagetest';
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
    path: '/review-test',
    element: <ReviewTest />,
  },
]);

export default router;
