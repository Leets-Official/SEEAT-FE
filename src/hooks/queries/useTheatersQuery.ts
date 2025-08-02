import { useQuery } from '@tanstack/react-query';
import { getTheaters } from '@/api/theater/getTheaters.api';
import type { GetTheatersParams } from '@/api/theater/getTheaters.api';

export const useTheatersQuery = ({ type, page = 1, size = 10 }: GetTheatersParams) => {
  return useQuery({
    queryKey: ['theaters', type, page, size],
    queryFn: () => getTheaters({ type, page, size }),
    enabled: !!type, // type이 없으면 쿼리 실행 X
  });
};
