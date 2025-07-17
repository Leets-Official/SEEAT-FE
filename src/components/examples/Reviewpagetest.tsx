// src/examples/ReviewTest.tsx
import { TicketUploadStep } from '@/pages/review/TicketPage';
import { useNavigate } from 'react-router-dom';
//import RatingStep from '@/pages/review/RatingStep';
const ReviewTest = () => {
  const navigate = useNavigate();
  //return <RatingStep onNext={() => navigate('review/hashtag')} />;
  return <TicketUploadStep onNext={() => navigate('/review/info')} />;
};

export default ReviewTest;
