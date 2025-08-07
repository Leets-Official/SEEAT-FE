import api from '@/api/api';
import type { ApiResponse, PaginationData } from '@/types/api-response';
import type { CinemaFormat } from '@/types/onboarding';
import type { Theater } from '@/types/theater';

// 영화관 목록 조회
export interface GetTheatersParams {
  type: CinemaFormat;
  page: number;
  size: number;
}

const getTheaters = async ({
  type,
  page = 1,
  size = 10,
}: GetTheatersParams): Promise<PaginationData<Theater>> => {
  const res = await api.get<ApiResponse<PaginationData<Theater>>>('/theaters', {
    params: {
      auditoriumType: type,
      page,
      size,
    },
  });

  console.log('getTheaters API 응답', res.data.data);

  const { content, hasNext, page: currentPage, size: pageSize } = res.data.data;

  if (!content) {
    throw new Error('영화관 목록에 응답이 없습니다.');
  }

  return {
    content,
    hasNext,
    page: currentPage,
    size: pageSize,
  };
};

// 좌석 배치도 조회

// 평점/개수 포함된 좌석 배치도 조회

// 상영관 상세 조회
export interface GetTheatersDetailResponse {
  theaterName: string;
  auditoriumId: string;
  auditoriumName: string;
  imageUrl: string;
  screenSize: string | null;
  soundType: string | null;
  reviewCount: number;
  averageReview: number;
}

const getTheatersDetail = async (auditoriumId: string): Promise<GetTheatersDetailResponse> => {
  const res = await api.get<ApiResponse<GetTheatersDetailResponse>>(
    `/theaters/auditorium/${auditoriumId}`,
  );
  return res.data.data;
};

//AI 요약 리뷰
export interface TheaterSummaryResponse {
  auditoriumId: string;
  auditoriumName: string;
  summary: string;
}

const getTheaterSummary = async (auditoriumId: string): Promise<TheaterSummaryResponse> => {
  const res = await api.get<ApiResponse<TheaterSummaryResponse>>(`/summary/${auditoriumId}`);
  return res.data.data;
};

export { getTheaters, getTheatersDetail, getTheaterSummary };
