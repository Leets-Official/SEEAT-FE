export interface Review {
  id: string;
  imageUrl: string;
  tags: string[];
  title: string;
  description: string;
  likeCount: number;
}

export const popularReviews: Review[] = [
  {
    id: '1',
    imageUrl: '/images/review-thumb1.png',
    tags: ['쾌적함', '청결', '몰입감'],
    title: '남양주현대아울렛 스페이스원',
    description: '리뷰 내용 앞줄을 조금 보여주는 공간 어쩌구 저쩌구',
    likeCount: 24,
  },
  {
    id: '2',
    imageUrl: '/images/review-thumb2.png',
    tags: ['음향', '화질', '좌석 넓음'],
    title: '용산 CGV 아이맥스관 영화관이름이이만큼길면어떻게될지',
    description:
      '최신 시설에 감탄했어요. 소리랑 화면이 최고예요. 리뷰를 이렇게 길게 늘리면 잘리는지 안 잘리는지',
    likeCount: 18,
  },
  {
    id: '3',
    imageUrl: '/images/review-thumb3.png',
    tags: ['한산함', '뷰 좋음', '친절'],
    title: '신촌 메가박스 컴포트관',
    description: '사람 없고 조용해서 좋았어요. 강력 추천!',
    likeCount: 30,
  },
  {
    id: '4',
    imageUrl: '/images/review-thumb4.png',
    tags: ['쾌적함', '음향', '시야'],
    title: '강남역 롯데시네마',
    description: '자리 간격 넓고 시야도 탁 트여서 좋아요.',
    likeCount: 12,
  },
];
