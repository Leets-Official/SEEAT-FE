// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SplashPage from '@/pages/splash/SplashPage';
import Signup from '@/pages/signup';
import Home from '@/pages/home';
import MyPage from '@/pages/my';

import OnboardingNicknamePage from '@/pages/onboarding/OnboardingNicknamePage';
import OnboardingGenrePage from '@/pages/onboarding/OnboardingGenrePage';
import OnboardingTheaterPage from '@/pages/onboarding/OnboardingTheaterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/onboarding/nickname" element={<OnboardingNicknamePage />} />
        <Route path="/onboarding/genre" element={<OnboardingGenrePage />} />
        <Route path="/onboarding/theater" element={<OnboardingTheaterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
