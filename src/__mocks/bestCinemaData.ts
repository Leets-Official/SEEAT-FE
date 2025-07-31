import type { BestCinema } from '@/types/bestCinema';

const rawCinemas = [
  {
    auditoriumId: 'AUD00001',
    auditoriumName: '남양주현대아울렛 스페이스원 (1관)',
    avgRating: 4.5,
    reviewCount: 28,
    score: 95.5,
    imageUrl: '/images/cinema1.png',
  },
  {
    auditoriumId: 'AUD-D0006',
    auditoriumName: '용산 CGV 아이맥스관',
    avgRating: 4.7,
    reviewCount: 32,
    score: 98.3,
    imageUrl: '/images/cinema2.png',
  },
  {
    auditoriumId: 'AUD-D0007',
    auditoriumName: '신촌 메가박스 컴포트관 근데영화관이름이이렇게길어지면',
    avgRating: 4.3,
    reviewCount: 18,
    score: 88.2,
    imageUrl: '/images/cinema3.png',
  },
  {
    auditoriumId: 'AUD00004',
    auditoriumName: '대전신세계아트앤사이언스',
    avgRating: 4.1,
    reviewCount: 25,
    score: 85.0,
    imageUrl: '/images/cinema4.png',
  },
];

//score 기준 rank 부여하기
export const bestCinemas: BestCinema[] = rawCinemas
  .sort((a, b) => b.score - a.score)
  .map((cinema, index) => ({
    ...cinema,
    rank: index + 1,
  }));
