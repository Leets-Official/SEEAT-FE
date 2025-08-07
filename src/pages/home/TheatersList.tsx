import { useEffect, useRef, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToggleTab, Header, TheaterList } from '@/components';
import type { CinemaFormat } from '@/types/onboarding';
import { getTheaters } from '@/api/theater/theater.api';
import type { Theater } from '@/types/theater';

export default function TheaterListPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const queryTab = new URLSearchParams(location.search).get('tab');
  const initialTab: CinemaFormat = queryTab === 'dolby' ? 'Dolby' : 'IMAX';

  const [selectedTab, setSelectedTab] = useState<CinemaFormat>(initialTab);
  const [selectedAuditorium, setSelectedAuditorium] = useState<string | null>(null);
  const [theaters, setTheaters] = useState<Theater[]>([]);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const observerRef = useRef<HTMLDivElement | null>(null);

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
  }, [isLoading, hasNext, page, selectedTab]);

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
        setPage(2);
      } catch (err) {
        console.error('초기 로딩 실패:', err);
      }
    };

    reset();
  }, [selectedTab]);

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab as CinemaFormat);
    setSelectedAuditorium(null);
  };

  return (
    <div className="flex min-h-screen flex-col pt-11">
      <Header leftSection="BACK" onBackClick={() => navigate('/home')} className="bg-gray-900">
        영화관 리스트
      </Header>

      {/* 탭 */}
      <div className="flex justify-center px-5 pt-5">
        <div className="w-[375px]">
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

      {/* 리스트 */}
      <div className="mt-5 px-5">
        <TheaterList
          data={theaters}
          selected={selectedAuditorium ? [selectedAuditorium] : []}
          onSelect={(id) => setSelectedAuditorium(id)}
          onAuditoriumClick={(auditoriumId) => {
            navigate(`/theaters/${auditoriumId}`);
          }}
        />
        {hasNext && <div ref={observerRef} className="h-[100px]" />}
      </div>
    </div>
  );
}
