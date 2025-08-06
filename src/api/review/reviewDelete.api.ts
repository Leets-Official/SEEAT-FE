import api from '../api';

export const deleteReview = async (reviewId: number): Promise<null> => {
  const res = await api.delete(`/reviews/${reviewId}`);
  return res.data.data;
};
