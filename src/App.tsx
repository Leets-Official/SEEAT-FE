import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SplashPage from '@/pages/splash/SplashPage';
import Signup from '@/pages/signup';
import Home from '@/pages/home';
import MyPage from '@/pages/my/MyPage';
import MySettingPage from '@/pages/my/MySetting';
import ProfileEdit from '@/pages/my/ProfileEdit';
import SelectGenre from '@/pages/my/SelectGenre';
import CinemaChoice from '@/pages/my/CinemaChoice';
import OnboardingNicknamePage from '@/pages/onboarding/OnboardingNicknamePage';
import OnboardingGenrePage from '@/pages/onboarding/OnboardingGenrePage';
import OnboardingTheaterPage from '@/pages/onboarding/OnboardingTheaterPage';
import ReviewSearchPage from '@/pages/search/ReviewSearch';
import ReviewSearchResultPage from '@/pages/search/ReviewSearchResult';

import { FilterProvider } from '@/contexts/FilterContext';

function App() {
  return (
    <FilterProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/login" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/my/settings" element={<MySettingPage />} />
          <Route path="/my/profile-edit" element={<ProfileEdit />} />
          <Route path="/my/select-genre" element={<SelectGenre />} />
          <Route path="/my/cinema-choice" element={<CinemaChoice />} />
          <Route path="/onboarding/nickname" element={<OnboardingNicknamePage />} />
          <Route path="/onboarding/genre" element={<OnboardingGenrePage />} />
          <Route path="/onboarding/theater" element={<OnboardingTheaterPage />} />
          <Route path="/search" element={<ReviewSearchPage />} />
          <Route path="/search/result" element={<ReviewSearchResultPage />} />
        </Routes>
      </BrowserRouter>
    </FilterProvider>
  );
}

export default App;