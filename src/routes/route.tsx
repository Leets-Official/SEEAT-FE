import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/home';
import MyPage from '@/pages/my';
import Signup from '@/pages/signup';
import ReviewTest from '@/components/examples/Reviewpagetest';
import MovieInfoForm from '@/pages/review/MovieInfoStep';

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
    path: '/review', //테스트
    element: <ReviewTest />,
  },
  {
    path: '/review/info',
    element: <MovieInfoForm />, //테스트
  },
]);

export default router;
