import { useQuery } from '@tanstack/react-query';
import { getTheaters } from '@/api/theater/getTheaters.api';
import type { GetTheatersParams } from '@/api/theater/getTheaters.api';
import type { Theater } from '@/types/theater';
import type { ApiError } from '@/types/api-response';

export const useTheatersQuery = ({ type, page = 1, size = 10 }: GetTheatersParams) => {
  return useQuery<Theater[], ApiError>({
    queryKey: ['theaters', type, page, size],
    queryFn: () => getTheaters({ type, page, size }),
    enabled: !!type, // type이 없으면 쿼리 실행 X
  });
};
