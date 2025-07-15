// src/routes/route.tsx
import { createBrowserRouter } from 'react-router-dom';

import SplashPage from '@/pages/splash/SplashPage';
import LoginPage from '@/pages/signup/LoginPage'; // 로그인/회원가입
import Home from '@/pages/home';
import MyPage from '@/pages/my';

import OnboardingNicknamePage from '@/pages/onboarding/OnboardingNicknamePage';
import OnboardingGenrePage from '@/pages/onboarding/OnboardingGenrePage';
import OnboardingTheaterPage from '@/pages/onboarding/OnboardingTheaterPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SplashPage />, // 시작은 스플래시 페이지
  },
  {
    path: '/login',
    element: <LoginPage />, // 로그인/회원가입
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
    path: '/home',
    element: <Home />,
  },
  {
    path: '/my',
    element: <MyPage />,
  },
]);

export default router;
