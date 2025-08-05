import type { ApiResponse } from '@/types/api-response';
import api from '../api';
import type { Hashtag } from '@/types/hashtag';

export const getHashtags = async (): Promise<Hashtag[]> => {
  const res = await api.get<ApiResponse<Hashtag[]>>('/hashtag');
  return res.data.data;
};

export interface TheaterHashtag {
  //추후 타입 추가
  hashTagId: number;
  hashTagName: string;
  count: number;
}
//상영관별 해시태그
export const getTheaterTags = async (auditoriumId: string): Promise<TheaterHashtag[]> => {
  const res = await api.get<ApiResponse<TheaterHashtag[]>>(`/hashtag/${auditoriumId}`);
  return res.data.data;
};
