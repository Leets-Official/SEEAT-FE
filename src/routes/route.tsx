import { createBrowserRouter } from 'react-router-dom';

import Home from '@/pages/home';
import Signup from '@/pages/signup';
import SplashPage from '@/pages/splash/SplashPage';

// 마이페이지 관련
import MyPage from '@/pages/my/MyPage';
import MySettingPage from '@/pages/my/MySetting';
import ProfileEdit from '@/pages/my/ProfileEdit';
import SelectGenre from '@/pages/my/SelectGenre';
import CinemaChoice from '@/pages/my/CinemaChoice';
import MyReviewPage from '@/pages/my/MyReview';
import MyBookmarkPage from '@/pages/my/MyBookmark';
import MyFeedbackPage from '@/pages/my/MyFeedback';

// 검색 관련
import Search from '@/pages/search/ReviewSearch';
import ReviewSearchResult from '@/pages/search/ReviewSearchResult';
import ReviewFilter from '@/pages/search/ReviewFilter';

// 리뷰 작성 플로우 관련
import MovieInfoForm from '@/pages/review/MovieInfoStep';
import CinemaSelect from '@/pages/review/CinemaSelect';
import { TicketUploadStep } from '@/pages/review/TicketPage';
import RatingStep from '@/pages/review/RatingStep';
import ReviewTagsPage from '@/pages/review/TagPage';
import ReviewTextForm from '@/pages/review/ReviewContent';

// 온보딩 관련
import OnboardingNicknamePage from '@/pages/onboarding/OnboardingNicknamePage';
import OnboardingGenrePage from '@/pages/onboarding/OnboardingGenrePage';
import OnboardingTheaterPage from '@/pages/onboarding/OnboardingTheaterPage';

// 좌석 관련
import SeatTest from '@/pages/seat/SeatTest';
import SeatReviewPage from '@/pages/seat';

const router = createBrowserRouter([
  // --- 공통 및 시작 페이지 ---
  {
    path: '/',
    element: <SplashPage />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Signup />,
  },

  // --- 온보딩 플로우 ---
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

  // --- 리뷰 검색 ---
  {
    path: '/search',
    element: <Search />,
  },
  {
    path: '/search/result',
    element: <ReviewSearchResult />,
  },
  {
    path: '/search/filter',
    element: <ReviewFilter />,
  },

  // --- 마이페이지 ---
  {
    path: '/my',
    element: <MyPage />, 
  },
  {
    path: '/my/reviews',
    element: <MyReviewPage />,
  },
  {
    path: '/my/bookmarks',
    element: <MyBookmarkPage />,
  },
  {
    path: '/my/feedback',
    element: <MyFeedbackPage />,
  },
  {
    path: '/my/settings',
    element: <MySettingPage />,
  },
  {
    path: '/my/profile-edit',
    element: <ProfileEdit />,
  },
  {
    path: '/my/select-genre',
    element: <SelectGenre />,
  },
  {
    path: '/my/cinema-choice',
    element: <CinemaChoice />,
  },

  // --- 좌석 리뷰 ---
  {
    path: '/seat',
    element: <SeatTest />,
  },
  {
    path: '/seat/review/:seatId',
    element: <SeatReviewPage />,
  },
]);

export default router;