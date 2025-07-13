import { BestCinemaCard, ReviewCard } from '@/components';

export default function ReviewCardExamples() {
  return (
    <main className="min-h-screen bg-[#222222] px-4 py-6">
      <h1 className="text-title-2 mb-4">리뷰카드 테스트</h1>

      {/*리뷰카드 테스트*/}
      <ReviewCard
        imageUrl=""
        tags={['태그', '태그']}
        title="타이틀"
        description="리뷰 내용 앞줄 어쩌고저쩌고"
        likeCount={24}
        onClick={() => {}} //테스트용
      />

      <div className="h-8" />

      {/*베스트 영화관 테스트*/}
      <h2 className="text-title-2 mb-2">베스트 시네마 카드 테스트</h2>
      <BestCinemaCard
        imageUrl=""
        rank={1}
        title="남양주현대아울렛 스페이스원"
        reviewCount={28}
        onClick={() => {}} //테스트용
      />
    </main>
  );
}
