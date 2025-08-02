import { createBrowserRouter } from 'react-router-dom';
import Signup from '@/pages/signup';
import SplashPage from '@/pages/splash/SplashPage';
import MyPage from '@/pages/my/MyPage';
import MySettingPage from '@/pages/my/MySetting';
import ProfileEdit from '@/pages/my/ProfileEdit';
import SelectGenre from '@/pages/my/SelectGenre';
import CinemaChoice from '@/pages/my/CinemaChoice';
import MyReviewPage from '@/pages/my/MyReview';
import MyBookmarkPage from '@/pages/my/MyBookmark';
import MyFeedbackPage from '@/pages/my/MyFeedback';
import Search from '@/pages/search/ReviewSearch';
import ReviewSearchResult from '@/pages/search/ReviewSearchResult';
import ReviewFilter from '@/pages/search/ReviewFilter';
import MovieInfoForm from '@/pages/review/MovieInfoStep';
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
import OnboardingNicknamePage from '@/pages/onboarding/OnboardingNicknamePage';
import OnboardingGenrePage from '@/pages/onboarding/OnboardingGenrePage';
import OnboardingTheaterPage from '@/pages/onboarding/OnboardingTheaterPage';
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
    path: '/login',
    element: <Signup />,
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
