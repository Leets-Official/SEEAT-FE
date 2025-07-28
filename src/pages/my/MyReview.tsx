import { useNavigate } from 'react-router-dom'; 
import ReviewCard from '@/components/common/ReviewCard/ReviewCard';
import HeaderBasic from '@/components/common/Header/HeaderBasic';
import MoreVerticalIcon from '@/assets/icons/more_vertical.svg?react';

// 페이지에 표시할 가상 리뷰 데이터
const mockMyReviews = [
  {
    id: 1,
    imageUrl: '/placeholder.png', // 실제 이미지 경로로 교체 필요
    tags: ['태그', '태그', '태그'],
    title: '남양주현대아울렛 스페이스원',
    description: '리뷰 내용 앞줄을 조금 보여주는걸로 어쩌구 저쩌구',
    likeCount: 24,
  },
  // ... (나머지 목업 데이터는 동일)
  {
    id: 7,
    imageUrl: '/placeholder.png',
    tags: ['#태그', '#태그', '#태그'],
    title: '남양주현대아울렛 스페이스원',
    description: '리뷰 내용 앞줄을 조금 보여주는걸로 어쩌구 저쩌구',
    likeCount: 24,
  },
];

export default function MyReviewPage() {
  const navigate = useNavigate(); 

  return (
    <div className="bg-gray-900 text-white">
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