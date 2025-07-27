import { createBrowserRouter } from 'react-router-dom';

// ====================================================================
// 1. 필요한 페이지 컴포넌트들을 모두 import 합니다.
// ====================================================================
import Home from '@/pages/home';
import Signup from '@/pages/signup';
import MyPage from '@/pages/my/MyPage';
import MySettingPage from '@/pages/my/MySetting';
import ProfileEdit from '@/pages/my/ProfileEdit';

// ★★★ 이 줄이 가장 중요합니다 ★★★
// '/my/select-genre' 경로를 처리할 SelectGenre 컴포넌트를 import 해야 합니다.
import SelectGenre from '@/pages/my/SelectGenre';

// 테스트용 페이지 (기존 코드 유지)
import Search from '@/pages/search/ReviewSearch';
import ReviewSearchResult from '@/pages/search/ReviewSearchResult';
import ReviewFilter from '@/pages/search/ReviewFilter';
import CinemaChoice from '@/pages/my/CinemaChoice';

// ====================================================================
// 2. createBrowserRouter를 사용하여 라우팅 규칙을 정의합니다.
// ====================================================================
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
    path: '/my/settings',
    element: <MySettingPage />,
  },
  {
    path: '/my/profile-edit',
    element: <ProfileEdit />,
  },

  // ★★★ 여기가 문제의 핵심입니다 ★★★
  // '/my/select-genre' 주소로 접속했을 때,
  // 위에서 import한 <SelectGenre /> 컴포넌트를 보여주도록 규칙을 추가합니다.
  // 이 객체가 없으면 "No routes matched" 오류가 발생합니다.
  {
    path: '/my/select-genre',
    element: <SelectGenre />,
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
    {
    path: '/my/cinema-choice',
    element: <CinemaChoice />,
  },
]);

export default router;