import { BottomNavigation, ReviewCard } from '@/components';

export default function BottomNavigationExamples() {
  return (
    <div className="h-screen bg-gray-900 pb-[59px] text-white">
      <div className="p-4">BottomNavigation 예제 페이지</div>
      <ReviewCard
        variant="rating"
        imageUrl="https://example.com/thumb.jpg"
        tags={['추천', '웰메이드']}
        title="CGV 왕십리 (4DX관)"
        date="2025.07.31"
        rating={4.7}
        likeCount={245}
      />
      <ReviewCard
        imageUrl="https://example.com/thumb.jpg"
        tags={['감동', '액션']}
        title="CGV 용산아이파크몰 (IMAX관)"
        description="스토리가 아주 감동적이었어요!"
        likeCount={123}
      />
      <BottomNavigation></BottomNavigation>
    </div>
  );
}
