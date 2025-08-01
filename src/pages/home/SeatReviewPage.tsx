import { Header } from '@/components';
import { useNavigate } from 'react-router-dom';
//import { reviewSummaryMock } from '@/__mocks';

const SeatReviewPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen max-w-[430px] flex-col bg-gray-900 pt-11 pb-5">
      <div className="fixed top-0 right-0 left-0 z-50 bg-gray-900">
        <Header
          title=""
          showBack
          onBackClick={() => navigate('')}
          showBookmark={false}
          showLike={false}
        />
      </div>
      <div className="mx-auto w-full max-w-[430px] space-y-3 px-5 pt-5">
        <div className="text-text-1 text-white">{}</div>
      </div>
    </div>
  );
};

export default SeatReviewPage;
