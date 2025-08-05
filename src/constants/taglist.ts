interface TagReview {
  iconType: 'sound' | 'environment' | 'companion';
  title: string;
  count: number;
}

const tagList: TagReview[] = [
  { iconType: 'sound', title: '음향이 최고예요', count: 132 },
  { iconType: 'sound', title: '서라운드가 좋아요', count: 132 },
  { iconType: 'environment', title: '입출입이 편리해요', count: 132 },
  { iconType: 'companion', title: '혼자서도 좋아요', count: 132 },
  { iconType: 'companion', title: '친구랑 재밌었어요', count: 62 },
  { iconType: 'environment', title: '분위기가 좋아요', count: 55 },
] as const;
export default tagList;
