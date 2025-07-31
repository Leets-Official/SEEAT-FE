import { ReviewCard, Header } from '@/components';
import { mockMyReviews } from '@/__mocks/mockReviews';

export default function MyReviewPage() {
  return (
    <div>
      <div className="w-full px-4">
        <Header leftSection="BACK" rightSection="KEBAB">
          나의 후기
        </Header>

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
