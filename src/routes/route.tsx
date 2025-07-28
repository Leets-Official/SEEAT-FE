import { createBrowserRouter } from 'react-router-dom';

import Home from '@/pages/home';
import Signup from '@/pages/signup';
import MyPage from '@/pages/my/MyPage';
import MySettingPage from '@/pages/my/MySetting';
import ProfileEdit from '@/pages/my/ProfileEdit';
import SelectGenre from '@/pages/my/SelectGenre';
import CinemaChoice from '@/pages/my/CinemaChoice';
import MyReviewPage from '@/pages/my/MyReview';
import MyBookmarkPage from '@/pages/my/MyBookmark';

import Search from '@/pages/search/ReviewSearch';
import ReviewSearchResult from '@/pages/search/ReviewSearchResult';
import ReviewFilter from '@/pages/search/ReviewFilter';

import MyFeedbackPage from '@/pages/my/MyFeedback';

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
    path: '/home',
    element: <Home />,
  },
  {
    path: '/search', // 테스트용
    element: <Search />,
  },
  {
    path: '/search/result',
    element: <ReviewSearchResult />,
  },
  {
    path: '/search/filter', // 필터 페이지
    element: <ReviewFilter />,
  },
]);

export default router;