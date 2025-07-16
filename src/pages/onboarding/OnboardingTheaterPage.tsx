import { Button, ToggleTab } from '@/components';
import { useNavigate } from 'react-router-dom';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import type { CinemaType, CinemaFormat } from '@/types/onboarding';

const theaterOptions: CinemaType[] = [
  'CGV 강남',
  '롯데시네마 홍대',
  '메가박스 코엑스',
  'CGV 용산',
  '메가박스 성수',
];

const formatOptions: CinemaFormat[] = ['IMAX', 'Dolby Cinema'];

const OnboardingTheaterPage = () => {
  const navigate = useNavigate();
  const {
    selectedCinemas,
    toggleCinema,
    cinemaFormat,
    setCinemaFormat,
  } = useOnboardingStore();

  const handleNext = () => {
    if (selectedCinemas.length === 0) return;
    // TODO: 온보딩 완료 후 홈 등으로 이동
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 pt-32 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-6">자주 가는 영화관을 선택해주세요</h2>
      <p className="text-sm text-gray-400 mb-4">최대 3개까지 선택할 수 있어요</p>

      <div className="grid grid-cols-2 gap-3 w-full max-w-sm mb-8">
        {theaterOptions.map((theater) => {
          const isSelected = selectedCinemas.includes(theater);
          return (
            <button
              key={theater}
              onClick={() => toggleCinema(theater)}
              className={`py-2 px-4 rounded-full border text-sm transition ${
                isSelected
                  ? 'bg-white text-black border-white'
                  : 'bg-transparent text-gray-400 border-gray-600 hover:border-white hover:text-white'
              }`}
            >
              {theater}
            </button>
          );
        })}
      </div>

      <h3 className="text-lg font-medium mb-3">선호 상영 형식</h3>
      <ToggleTab
        options={formatOptions}
        selected={cinemaFormat}
        onSelect={(format) => setCinemaFormat(format as CinemaFormat)}
      />

      <Button
        onClick={handleNext}
        disabled={selectedCinemas.length === 0}
        className={`w-full max-w-sm mt-12 ${
          selectedCinemas.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
         >
        완료
      </Button>
    </div>
  );
};

export default OnboardingTheaterPage;
