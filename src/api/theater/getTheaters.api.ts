import api from '@/api/api';
import type { ApiError, ApiResponse } from '@/types/api-response';
import type { CinemaFormat } from '@/types/onboarding';
import type { Theater } from '@/types/theater';

export interface GetTheatersParams {
  type: CinemaFormat;
  page: number;
  size: number;
}

export const getTheaters = async ({
  type,
  page = 1,
  size = 10,
}: GetTheatersParams): Promise<Theater[]> => {
  try {
    const res = await api.get<ApiResponse<{ content: Theater[] }>>('/theaters', {
      params: {
        auditoriumType: type,
        page,
        size,
      },
    });

    const content = res.data.data?.content;

    if (!content) {
      throw new Error('영화관 목록에 응답에 없습니다.');
    }

    console.log('영화관 목록 응답:', content);
    return content;
  } catch (error) {
    // ApiError 타입 캐스팅
    const apiError = error as ApiError;
    console.error('영화관 목록 호출 실패:', apiError.message, apiError.error);
    throw apiError;
  }
};
