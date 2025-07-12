import ReviewCard from '../common/ReviewCard/ReviewCard';

export default function ReviewCardExamples() {
  return (
    <main className="min-h-screen bg-[#222222] px-4 py-6">
      <h1 className="text-title-2 mb-4">리뷰카드 테스트</h1>
      <ReviewCard
        imageUrl=""
        tags={['태그', '태그']}
        title="타이틀"
        description="리뷰 내용 앞줄 어쩌고저쩌고"
        likeCount={24}
        onClick={() => alert('클릭됨')}
      />
    </main>
  );
}
