import ReviewCard from '@/components/common/ReviewCard/ReviewCard'; 
import HeaderBasic from '@/components/common/Header/HeaderBasic';  

const mockMyReviews = [
  {
    id: 1,
    imageUrl: '/placeholder.png', // 실제 이미지 경로로 교체 필요
    tags: ['태그', '태그', '태그'],
    title: '남양주현대아울렛 스페이스원',
    description: '리뷰 내용 앞줄을 조금 보여주는걸로 어쩌구 저쩌구',
    likeCount: 24,
  },
  {
    id: 2,
    imageUrl: '/placeholder.png',
    tags: ['태그', '태그', '태그'],
    title: '남양주현대아울렛 스페이스원',
    description: '리뷰 내용 앞줄을 조금 보여주는걸로 어쩌구 저쩌구',
    likeCount: 24,
  },
  {
    id: 3,
    imageUrl: '/placeholder.png',
    tags: ['태그', '태그', '태그'],
    title: '남양주현대아울렛 스페이스원',
    description: '리뷰 내용 앞줄을 조금 보여주는걸로 어쩌구 저쩌구',
    likeCount: 24,
  },
  {
    id: 4,
    imageUrl: '/placeholder.png',
    tags: ['#태그', '#태그', '#태그'],
    title: '남양주현대아울렛 스페이스원',
    description: '리뷰 내용 앞줄을 조금 보여주는걸로 어쩌구 저쩌구',
    likeCount: 24,
  },
  {
    id: 5,
    imageUrl: '/placeholder.png',
    tags: ['#태그', '#태그', '#태그'],
    title: '남양주현대아울렛 스페이스원',
    description: '리뷰 내용 앞줄을 조금 보여주는걸로 어쩌구 저쩌구',
    likeCount: 24,
  },
  {
    id: 6,
    imageUrl: '/placeholder.png',
    tags: ['#태그', '#태그', '#태그'],
    title: '남양주현대아울렛 스페이스원',
    description: '리뷰 내용 앞줄을 조금 보여주는걸로 어쩌구 저쩌구',
    likeCount: 24,
  },
   {
    id: 7,
    imageUrl: '/placeholder.png',
    tags: ['#태그', '#태그', '#태그'],
    title: '남양주현대아울렛 스페이스원',
    description: '리뷰 내용 앞줄을 조금 보여주는걸로 어쩌구 저쩌구',
    likeCount: 24,
  },
];

export default function MyBookmarkPage() {
  return (
    // global.css의 body 스타일이 적용되므로 배경색만 지정
        <div className="bg-gray-900">
          {/* global.css의 body 스타일로 중앙 정렬 및 최대 너비가 적용되므로 px-4만 유지 */}
          <div className="w-full px-4">
            {/* 헤더 */}
            <HeaderBasic>
              {/* 커스텀 유틸리티 클래스 text-title-3 적용 */}
              <h1 className="text-title-3">북마크</h1>
            </HeaderBasic>

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
                // 리뷰 클릭 시 상세 페이지 이동 등 로직 구현
                console.log(`Review ${review.id} clicked`);
              }}
            />
          ))}
        </main>
      </div>
    </div>
  );
}