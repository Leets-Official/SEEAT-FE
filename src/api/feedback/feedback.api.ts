import api from '@/api/api';

interface FeedbackRequest {
  feedbackContent: string;
}

export const postFeedback = async (body: FeedbackRequest) => {
  const res = await api.post('/feedback', body);
  return res.data;
};