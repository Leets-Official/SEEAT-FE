import { useEffect, useRef } from 'react';
import type { ApiError } from '@/types/api-response';

/**
 * 쿼리 후 에러를 감지하고 에러 처리하는 훅
 * @param error React Query의 error
 * @param handler 에러 발생 시 실행할 로직
 */
export const useAfterQuery = (error: unknown, handler: (error: ApiError) => void) => {
  const prevErrorRef = useRef<unknown>(null);

  useEffect(() => {
    if (error && error !== prevErrorRef.current) {
      prevErrorRef.current = error;

      try {
        const apiError = error as ApiError;
        handler(apiError);
      } catch (e) {
        console.error('에러 처리 중 문제 발생:', e);
      }
    }
  }, [error, handler]);
};
