import { useQuery } from '@tanstack/react-query';
import { getTheaters } from '@/api/theater/theater.api';
import type { GetTheatersParams } from '@/api/theater/theater.api';
import type { Theater } from '@/types/theater';
import type { ApiError } from '@/types/api-response';
import { useAfterQuery } from '../useAfterQuery';

export const useTheatersQuery = ({ type, page = 1, size = 10 }: GetTheatersParams) => {
  const query = useQuery<Theater[], ApiError>({
    queryKey: ['theaters', type, page, size],
    queryFn: () => getTheaters({ type, page, size }),
    enabled: !!type, // type이 없으면 쿼리 실행 X
  });

  useAfterQuery(query.error, (error) => {
    console.error(
      '🚨영화관 목록 호출 실패🚨 에러 코드:',
      error.code,
      '에러 메세지:',
      error.message,
    );
  });

  return query;
};
