// 리뷰 데이터의 타입을 정의해두면 자동 완성과 타입 체크에 유리합니다.
export interface Review {
  id: number;
  imageUrl: string;
  tags: string[];
  title: string;
  description: string;
  likeCount: number;
}

// export 키워드를 사용해 mockMyReviews 배열을 다른 파일에서 가져다 쓸 수 있도록 합니다.
export const mockMyReviews: Review[] = [
  {
    id: 1,
    imageUrl: '/placeholder.png', // 나중에 mockImage.ts의 값으로 대체할 수도 있습니다.
    tags: ['태그', '태그', '태그'],
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