import { ReviewCard, Header } from '@/components';
import { mockMyReviews } from '@/__mocks/mockReviews';

const MyBookmarkPage = () => {
  return (
    <div>
      <div className="w-full px-4">
        <Header
          leftSection="BACK"
          rightSection="KEBAB"
          onKebabClick={() => console.log('케밥버튼 클릭')}
        >
          북마크
        </Header>

        {/* 리뷰 목록 */}
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
};

export default MyBookmarkPage;
