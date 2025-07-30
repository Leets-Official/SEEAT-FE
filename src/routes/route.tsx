import { createBrowserRouter } from 'react-router-dom';
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
import HomePage from '@/pages/home/HomePage';
import TheaterListPage from '@/pages/home/TheatersList';
import TheaterDetailPage from '@/pages/home/TheaterDetail';
import TheaterReviewListPage from '@/pages/home/TheaterReviewListPage';
import ReviewDetailPage from '@/pages/home/ReviewDetail';
import SeatTest from '@/pages/seat/SeatTest';
import SeatReviewPage from '@/pages/seat';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SplashPage />,
  },
  {
    path: '/login',
    element: <Signup />,
  },
  //홈
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/theaters',
    element: <TheaterListPage />,
  },
  {
    path: '/theaters/:auditoriumId',
    element: <TheaterDetailPage />,
  },
  {
    path: '/theaters/:auditoriumId/reviews',
    element: <TheaterReviewListPage />,
  },
  {
    path: '/review/:reviewId',
    element: <ReviewDetailPage />,
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
  // 마이
  {
    path: '/my',
    element: <MyPage />,
  },
  // 온보딩
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

  // 좌석 배치도 테스트
  {
    path: '/seat',
    element: <SeatTest />,
  },
  //좌석 리뷰 목록 페이지
  {
    path: '/seat/review/:seatId',
    element: <SeatReviewPage />,
  },
]);

export default router;
