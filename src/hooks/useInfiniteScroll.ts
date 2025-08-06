import { useEffect, useRef, useState, useCallback } from 'react';

interface UseInfiniteScrollProps<T> {
  fetchFunction: (
    page: number,
    size: number,
  ) => Promise<{
    content: T[];
    hasNext: boolean;
    page: number;
    size: number;
  }>;
  pageSize?: number;
}

export default function useInfiniteScroll<T>({
  fetchFunction,
  pageSize = 10,
}: UseInfiniteScrollProps<T>) {
  const [data, setData] = useState<T[]>([]);
  const [page, setPage] = useState(0);
  const [hasNext, setHasNext] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const observerRef = useRef<HTMLDivElement | null>(null);

  const loadMore = useCallback(async () => {
    if (isLoading || !hasNext) return;

    setIsLoading(true);
    try {
      const res = await fetchFunction(page, pageSize);
      setData((prev) => [...prev, ...res.content]);
      setHasNext(res.hasNext);
      setPage(res.page + 1);
    } catch (err) {
      console.error('무한 스크롤 에러:', err);
    } finally {
      setIsLoading(false);
    }
  }, [fetchFunction, page, pageSize, hasNext, isLoading]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNext && !isLoading) {
          loadMore();
        }
      },
      {
        rootMargin: '100px',
        threshold: 1.0,
      },
    );

    const currentRef = observerRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [loadMore, hasNext, isLoading]);

  return {
    data,
    isLoading,
    observerRef, // 컴포넌트 하단에 ref로 연결
  };
}
