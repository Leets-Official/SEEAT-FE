import { useEffect, useRef, useState, useCallback } from 'react';

interface FetchResponse<T> {
  content: T[];
  hasNext: boolean;
  page: number;
  size: number;
}

interface UseInfiniteScrollProps<T> {
  fetchFunction: (page: number, size: number) => Promise<FetchResponse<T>>;
  pageSize?: number;
}

export default function useInfiniteScroll<T>({
  fetchFunction,
  pageSize = 10,
}: UseInfiniteScrollProps<T>) {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const observerRef = useRef<HTMLDivElement | null>(null);
  const pageRef = useRef(1);
  const hasNextRef = useRef(true);
  const isLoadingRef = useRef(false);

  const loadMore = useCallback(async () => {
    if (isLoadingRef.current || !hasNextRef.current) return;

    isLoadingRef.current = true;
    setIsLoading(true);

    try {
      const res = await fetchFunction(pageRef.current, pageSize);
      setData((prev) => [...prev, ...res.content]);

      console.log('📦 API 응답:', res);

      hasNextRef.current = res.hasNext;
      pageRef.current += 1;
    } catch (err) {
      console.error('무한 스크롤 에러:', err);
    } finally {
      isLoadingRef.current = false;
      setIsLoading(false);
    }
  }, [fetchFunction, pageSize]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      {
        rootMargin: '100px',
        threshold: 0.3,
      },
    );

    const current = observerRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [loadMore]);

  const reset = () => {
    pageRef.current = 0;
    hasNextRef.current = true;
    isLoadingRef.current = false;
    setData([]);
  };

  return {
    data,
    isLoading,
    observerRef, // 컴포넌트 하단 요소에 연결
    reset, // 필요 시 외부에서 초기화 가능
  };
}
