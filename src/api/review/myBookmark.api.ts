import api from '@/api/api';
import type { PaginatedBookmarkResponse } from '@/types/review';

interface PageRequest {
  page: number;
  size: number;
}

export const getMyBookmarks = async (
  params: PageRequest
): Promise<PaginatedBookmarkResponse> => {
  const res = await api.get('/profile/bookmark', { params });
  return res.data.data;
};