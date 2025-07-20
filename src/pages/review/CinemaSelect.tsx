import { useNavigate } from 'react-router-dom';
import { Button, ToggleTab, Header } from '@/components';
import { useState, useEffect } from 'react';
import { useReviewStore } from '@/store';

const cinemaData = {
  IMAX: [
    '남양주현대아울렛 스페이스원',
    '대구 신세계(동대구)',
    '대전신세계아트앤사이언스',
    '송도(트리플스트리트)',
    '기타 등등',
    '추후 연결',
    '가나다',
    '라마바',
    '사아자',
  ],
  'Dolby Cinema': [
    '수원AK플라자(수원역)',
    '안성스타필드',
    '코엑스',
    '하남스타필드',
    'ㄱㄴㄷㄹ',
    '추후연결',
  ],
};

export default function CinemaSelect() {
  const { isInitialized } = useReviewStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isInitialized) {
      navigate('/review');
    }
  }, [isInitialized, navigate]);
  const [selectedTab, setSelectedTab] = useState<'IMAX' | 'Dolby Cinema'>('IMAX');
  const [selectedCinema, setSelectedCinema] = useState('');

  const cinemas = cinemaData[selectedTab];

  const handleNext = () => {
    navigate('/review/info', { state: { cinema: selectedCinema } });
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 py-6">
      <Header
        title=""
        onBackClick={() => navigate('/review/info')}
        showLike={false}
        showBookmark={false}
      />

      {/* 탭 */}
      <div className="mb-4 flex w-full justify-center">
        <div className="w-[335px]">
          <ToggleTab
            options={['IMAX', 'Dolby Cinema']}
            selected={selectedTab}
            onSelect={(option) => setSelectedTab(option as 'IMAX' | 'Dolby Cinema')}
          />
        </div>
      </div>

      {/*영화관 목록 영역 */}
      <div className="scrollbar-hidden max-h-[calc(100vh-44px-56px-120px)] overflow-y-auto px-5">
        <div className="flex flex-col items-center gap-3 pb-6">
          {cinemas.map((cinema) => (
            <div key={cinema} className="w-full max-w-[335px]">
              <Button
                onClick={() => setSelectedCinema(cinema)}
                variant="secondary-assistive"
                color="gray"
                size="lg"
                fontType="title-3"
                className="w-full justify-start rounded-lg text-left"
                selected={selectedCinema === cinema}
              >
                {cinema}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className="fixed right-0 bottom-0 left-0 z-10 mx-auto w-full max-w-[430px] bg-gray-900 px-5 pb-6">
        <Button
          onClick={handleNext}
          variant="primary"
          color="red"
          size="lg"
          disabled={!selectedCinema}
          className="w-full rounded-md"
        >
          다음
        </Button>
      </div>
    </div>
  );
}
