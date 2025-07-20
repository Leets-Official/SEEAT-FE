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
import ReviewTagsPage from '@/pages/review/TagPage';
import ReviewTextForm from '@/pages/review/ReviewContent';

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
  //리뷰
  {
    path: '/review',
    children: [
      { index: true, element: <TicketUploadStep /> },
      { path: 'info', element: <MovieInfoForm /> },
      { path: 'info/cinema', element: <CinemaSelect /> },
      { path: 'rating', element: <RatingStep /> },
      { path: 'tag', element: <ReviewTagsPage /> },
      { path: 'form', element: <ReviewTextForm /> },
    ],
  },

  //마이
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
