import { useNavigate } from 'react-router-dom';
import { ReviewCard, HeaderBasic } from '@/components';
import { MoreVerticalIcon } from '@/assets';
import { mockMyReviews } from '@/__mocks/mockReviews';

export default function MyReviewPage() {
  const navigate = useNavigate();

  return (
    <div className="text-white">
      <div className="w-full px-4">
        <HeaderBasic onBackClick={() => navigate(-1)}>
          <div className="flex flex-1 items-center justify-between">
            <h1 className="text-title-3">나의 후기</h1>
            <button onClick={() => console.log('더보기 버튼 클릭')}>
              <MoreVerticalIcon className="h-6 w-6" />
            </button>
          </div>
        </HeaderBasic>

        <main className="flex flex-col gap-y-3 py-4">
          {mockMyReviews.map((review) => (
            <ReviewCard
              key={review.id}
              imageUrl={review.imageUrl}
              tags={review.tags}
              title={review.title}
              description={review.description}
              likeCount={review.likeCount}
              onClick={() => {
                console.log(`Review ${review.id} clicked`);
              }}
            />
          ))}
        </main>
      </div>
    </div>
  );
}