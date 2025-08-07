import { useEffect, useState } from 'react';
import { Header, ReviewCard } from '@/components';
import { getMyReviews } from '@/api/review/myReview.api';
import type { ReviewItem } from '@/types/review';

export default function MyReviewPage() {
  const [reviews, setReviews] = useState<ReviewItem[]>([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { content } = await getMyReviews({ page: 1, size: 10 });
        setReviews(content);
      } catch (err: unknown) {
        console.error(err);
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('후기를 불러오지 못했습니다.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="w-full px-4">
      <Header leftSection="BACK" className="bg-gray-900">
        나의 후기
      </Header>

      <main className="flex flex-col gap-y-3 py-4 pt-[60px]">
        {loading && <p className="text-white">로딩 중...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && reviews.length === 0 && (
          <p className="text-gray-400">작성한 후기가 없습니다.</p>
        )}
        {reviews.map((review) => (
          <ReviewCard
            key={review.reviewId}
            imageUrl={review.thumbnailUrl}
            tags={(review.hashtags ?? []).map((tag) => tag.hashTagName)}
            title={review.title}
            description={review.content}
            likeCount={review.heartCount}
            onClick={() => {
              console.log(`Review ${review.reviewId} clicked`);
            }}
          />
        ))}
      </main>
    </div>
  );
}
