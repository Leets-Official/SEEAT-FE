import { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { Button, ToggleTab, Header, ProgressBar, TheaterList } from '@/components';
import type { CinemaFormat } from '@/types/onboarding';
import { useRegisterMutation } from '@/hooks/mutations/useRegisterMutation';
import { getTheaters } from '@/api/theater/theater.api';
import type { Theater } from '@/types/theater';

const OnboardingTheaterPage = () => {
  const navigate = useNavigate();
  const { nickname, selectedGenres, selectedCinemas, setSelectedCinemas, setCinemaFormat } =
    useOnboardingStore();

  const [selectedTab, setSelectedTab] = useState<CinemaFormat>('IMAX');
  const [theaters, setTheaters] = useState<Theater[]>([]);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const observerRef = useRef<HTMLDivElement | null>(null);

  const { mutate } = useRegisterMutation();

  const loadMore = useCallback(async () => {
    if (isLoading || !hasNext) return;

    setIsLoading(true);
    try {
      const res = await getTheaters({ type: selectedTab, page, size: 10 });
      setTheaters((prev) => [...prev, ...res.content]);
      setHasNext(res.hasNext);
      setPage((prev) => prev + 1);
    } catch (err) {
      console.error('영화관 목록 로딩 실패:', err);
    } finally {
      setIsLoading(false);
    }
  }, [page, selectedTab, hasNext, isLoading]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoading && hasNext) {
          loadMore();
        }
      },
      {
        rootMargin: '100px',
        threshold: 0.7,
      },
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [loadMore, isLoading, hasNext]);

  // 탭 변경 시 초기화
  useEffect(() => {
    const reset = async () => {
      setPage(1);
      setTheaters([]);
      setHasNext(true);
      try {
        const res = await getTheaters({ type: selectedTab, page: 1, size: 10 });
        setTheaters(res.content);
        setHasNext(res.hasNext);
        setPage(1);
      } catch (err) {
        console.error('초기 로딩 실패:', err);
      }
    };

    reset();
    setCinemaFormat(selectedTab);
  }, [selectedTab]);

  const handleToggleTab = (tab: string) => {
    const format = tab as CinemaFormat;
    if (format === selectedTab) return;
    setSelectedTab(format);
  };

  const toggleTheater = (auditoriumId: string) => {
    const isSelected = selectedCinemas.includes(auditoriumId);
    if (isSelected) {
      setSelectedCinemas(selectedCinemas.filter((id) => id !== auditoriumId));
    } else {
      if (selectedCinemas.length >= 2) return;
      setSelectedCinemas([...selectedCinemas, auditoriumId]);
    }
  };

  const handleNext = () => {
    if (selectedCinemas.length === 0) return;

    const tempUserKey = localStorage.getItem('tempKey');
    if (!tempUserKey) {
      console.error('임시 유저 키가 없습니다.');
      return;
    }

    mutate(
      {
        data: {
          nickname,
          genres: selectedGenres,
          auditoriumId: selectedCinemas,
        },
        tempUserKey,
      },
      {
        onSuccess: () => {
          localStorage.removeItem('tempKey');
          navigate('/signup/complete');
        },
        onError: (err) => {
          console.error('회원가입 실패', err);
        },
      },
    );
  };

  return (
    <div className="relative mx-auto min-h-screen w-full pb-32">
      {/* 상단 헤더 */}
      <Header leftSection="BACK" className="bg-gray-900" />

      <div className="pt-[34px]">
        <ProgressBar currentStep={3} totalSteps={3} />

        <div className="mt-2 mb-32 px-6">
          <h1 className="text-title-2 mb-1">자주 가는 영화관을 선택해주세요</h1>
          <p className="text-caption-2 mb-6 text-red-300">최대 2개까지 선택할 수 있어요.</p>

          <ToggleTab
            options={[
              { label: 'IMAX', value: 'IMAX' },
              { label: 'Dolby Cinema', value: 'Dolby' },
            ]}
            selected={selectedTab}
            onSelect={handleToggleTab}
            className="mb-12 w-full"
          />

          <div className="h-3" />

          <TheaterList data={theaters} selected={selectedCinemas} onSelect={toggleTheater} />

          {hasNext && <div ref={observerRef} className="h-[100px]" />}
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className="fixed bottom-8 left-1/2 w-full max-w-[430px] -translate-x-1/2 px-6">
        <Button
          onClick={handleNext}
          disabled={selectedCinemas.length === 0}
          variant="primary"
          color="red"
          size="lg"
          fontType="title-3"
          className="w-full"
        >
          선택완료
        </Button>
      </div>
    </div>
  );
};

export default OnboardingTheaterPage;
