export interface BestCinema {
  id: string;
  rank: number;
  imageUrl: string;
  title: string;
  rating: number;
  reviewCount: number;
}

export const bestCinemas: BestCinema[] = [
  {
    id: '1',
    rank: 1,
    imageUrl: '/images/cinema1.png',
    title: '남양주현대아울렛 스페이스원',
    rating: 4.5,
    reviewCount: 28,
  },
  {
    id: '2',
    rank: 2,
    imageUrl: '/images/cinema2.png',
    title: '용산 CGV 아이맥스관',
    rating: 4.7,
    reviewCount: 32,
  },
  {
    id: '3',
    rank: 3,
    imageUrl: '/images/cinema3.png',
    title: '신촌 메가박스 컴포트관 근데영화관이름이이렇게길어지면',
    rating: 4.3,
    reviewCount: 18,
  },
  {
    id: '4',
    rank: 4,
    imageUrl: '/images/cinema4.png',
    title: '강남 롯데시네마',
    rating: 4.1,
    reviewCount: 25,
  },
];
