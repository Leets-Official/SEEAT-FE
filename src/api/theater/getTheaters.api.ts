import api from '@/api/api';
import type { CinemaFormat } from '@/types/onboarding';

export interface GetTheatersParams {
  type: CinemaFormat;
  page: number;
  size: number;
}

export const getTheaters = async ({ type, page = 1, size = 10 }: GetTheatersParams) => {
  try {
    const res = await api.get('/theaters', {
      params: {
        auditoriumType: type,
        page,
        size,
      },
    });

    const content = res.data.data.content;

    if (!content) {
      throw new Error('Theater content is missing in response');
    }

    console.log('✅ 영화관 목록 응답:', content);
    return content;
  } catch (e) {
    console.error('❌ 영화관 목록 호출 실패:', e);
    throw e;
  }
};
