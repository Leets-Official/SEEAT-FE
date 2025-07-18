import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/home';
import MyPage from '@/pages/my';
import Signup from '@/pages/signup';

import MovieInfoForm from '@/pages/review/MovieInfoStep';
import SplashPage from '@/pages/splash/SplashPage';
import OnboardingNicknamePage from '@/pages/onboarding/OnboardingNicknamePage';
import OnboardingGenrePage from '@/pages/onboarding/OnboardingGenrePage';
import OnboardingTheaterPage from '@/pages/onboarding/OnboardingTheaterPage';
import CinemaSelect from '@/pages/review/CinemaSelect';
import { TicketUploadStep } from '@/pages/review/TicketPage';
import RatingStep from '@/pages/review/RatingStep';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SplashPage />,
  },
  {
    path: '/login',
    element: <Signup />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/review', //테스트
    element: <TicketUploadStep />,
  },
  {
    path: '/review/info',
    element: <MovieInfoForm />, //테스트
  },
  {
    path: '/review/info/cinema',
    element: <CinemaSelect />,
  },
  {
    path: '/review/rating',
    element: <RatingStep />,
  },
  {
    path: '/my',
    element: <MyPage />,
  },
  {
    path: '/onboarding/nickname',
    element: <OnboardingNicknamePage />,
  },
  {
    path: '/onboarding/genre',
    element: <OnboardingGenrePage />,
  },
  {
    path: '/onboarding/theater',
    element: <OnboardingTheaterPage />,
  },
]);

export default router;
