import api from '@/api/api';

export interface GetTheatersParams {
  type: string;
  page: number;
  size: number;
}

export const getTheaters = async ({ type, page = 1, size = 10 }: GetTheatersParams) => {
  const { data } = await api.get('/theaters', {
    params: {
      auditoriumType: type,
      pageRequest: {
        page,
        size,
      },
    },
  });
  return data;
};
