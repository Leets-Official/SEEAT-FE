import { useNavigate } from 'react-router-dom';
import { ToggleTab, ReviewStepLayout, TheaterList } from '@/components';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useReviewStore } from '@/store';
import { getTheaters } from '@/api/theater/theater.api';
import type { CinemaFormat } from '@/types/onboarding';
import type { Theater } from '@/types/theater';

export default function CinemaSelect() {
  const { isInitialized } = useReviewStore();
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState<CinemaFormat>('IMAX');
  const [selectedAuditorium, setSelectedAuditorium] = useState<string | null>(null);

  // 무한스크롤용 상태
  const [theaters, setTheaters] = useState<Theater[]>([]);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  // 초기화 조건
  useEffect(() => {
    if (!isInitialized) {
      navigate('/review');
    }
  }, [isInitialized, navigate]);

  // theater 목록 초기화 (탭 변경 시)
  useEffect(() => {
    const reset = async () => {
      setPage(1);
      setTheaters([]);
      setHasNext(true);
      try {
        const res = await getTheaters({ type: selectedTab, page: 1, size: 10 });
        setTheaters(res.content);
        setHasNext(res.hasNext);
        setPage(2);
      } catch (err) {
        console.error('초기 로딩 실패:', err);
      }
    };
    reset();
  }, [selectedTab]);

  // theater 추가 로딩
  const loadMore = useCallback(async () => {
    if (isLoading || !hasNext) return;
    setIsLoading(true);
    try {
      const res = await getTheaters({ type: selectedTab, page, size: 10 });
      setTheaters((prev) => [...prev, ...res.content]);
      setHasNext(res.hasNext);
      setPage((prev) => prev + 1);
    } catch (err) {
      console.error('추가 로딩 실패:', err);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, hasNext, selectedTab, page]);

  // IntersectionObserver 연결
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoading && hasNext) {
          loadMore();
        }
      },
      { rootMargin: '100px', threshold: 0.7 },
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [loadMore, isLoading, hasNext]);

  // 탭 변경
  const handleTabChange = (tab: string) => {
    setSelectedTab(tab as CinemaFormat);
    setSelectedAuditorium(null);
  };

  // 다음 단계로 이동
  const handleNext = () => {
    const selected = theaters.find((d) => d.auditoriumId === selectedAuditorium);
    if (!selected) return;

    navigate('/review/info', {
      state: {
        cinema: {
          id: selected.auditoriumId,
          name: selected.theaterName,
          hall: selected.auditoriumName,
        },
      },
    });
  };

  return (
    <ReviewStepLayout onClickNext={handleNext} disabled={!selectedAuditorium} nextLabel="선택 완료">
      {/* 탭 */}
      <div className="mb-4 flex justify-center pt-5">
        <div className="w-full">
          <ToggleTab
            options={[
              { label: 'IMAX', value: 'IMAX' },
              { label: 'Dolby Cinema', value: 'Dolby' },
            ]}
            selected={selectedTab}
            onSelect={handleTabChange}
          />
        </div>
      </div>

      {/* 영화관 목록 */}
      <TheaterList
        data={theaters}
        selected={selectedAuditorium ? [selectedAuditorium] : []}
        onSelect={(id) => setSelectedAuditorium(id)}
      />
      {hasNext && <div ref={observerRef} className="h-[100px]" />}
    </ReviewStepLayout>
  );
}
