import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/home';
import MyPage from '@/pages/my';
import SplashPage from '@/pages/splash/SplashPage'
//테스트용
import BottomNavigationExamples from '@/components/examples/BottomNavigationExamples';
import ReviewCardExamples from '@/components/examples/ReviewCardExamples';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SplashPage />,
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
  {
    path: '/review-test', //이것도 테스트용... 나중에 지우기
    element: <ReviewCardExamples></ReviewCardExamples>,
  },
]);

export default router;

