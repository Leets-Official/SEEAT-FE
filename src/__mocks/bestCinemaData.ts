import type { BestCinema } from '@/types/bestCinema';

const rawCinemas = [
  {
    auditoriumId: '13018',
    auditoriumName: '남양주현대아울렛 스페이스원 (1관)',
    avgRating: 4.5,
    reviewCount: 28,
    score: 95.5,
    imageUrl: '/images/cinema1.png',
  },
  {
    auditoriumId: '13019',
    auditoriumName: '용산 CGV 아이맥스관',
    avgRating: 4.7,
    reviewCount: 32,
    score: 98.3,
    imageUrl: '/images/cinema2.png',
  },
  {
    auditoriumId: '13020',
    auditoriumName: '신촌 메가박스 컴포트관 근데영화관이름이이렇게길어지면',
    avgRating: 4.3,
    reviewCount: 18,
    score: 88.2,
    imageUrl: '/images/cinema3.png',
  },
  {
    auditoriumId: '13021',
    auditoriumName: '강남 롯데시네마',
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
