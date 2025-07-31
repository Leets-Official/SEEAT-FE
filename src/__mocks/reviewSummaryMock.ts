import type { ReviewSummary } from '@/types/review';

export const reviewSummaryMock: ReviewSummary[] = [
  {
    id: 1,
    movieSeatInfo: {
      movieTitle: '어벤져스: 엔드게임',
      theaterName: '남양주현대아울렛 스페이스원',
      auditoriumName: '1관',
      seatNumber: 'F6, F12',
    },
    hashtags: [
      { hashTagId: 1, hashTagName: '음향최고' },
      { hashTagId: 2, hashTagName: '시야좋음' },
      { hashTagId: 3, hashTagName: '자녀와' },
    ],
    content: 'IMAX 사운드는 정말 감동적이에요. 앉은 좌석도 시야 확보 최고였습니다.',
    rating: 5,
    user: {
      userId: 101,
      nickname: 'Leets',
      profileImageUrl: '',
    },
    imageInfo: [
      { imageUrl: '', order: 1 },
      { imageUrl: '', order: 2 },
    ],
    heartCount: 22,
    createdAt: '2025-07-27T07:14:36Z',
  },
  {
    id: 2,
    movieSeatInfo: {
      movieTitle: '범죄도시4',
      theaterName: '남양주현대아울렛 스페이스원',
      auditoriumName: '1관',
      seatNumber: 'E10',
    },
    hashtags: [
      { hashTagId: 4, hashTagName: '화질굿' },
      { hashTagId: 5, hashTagName: '대형스크린' },
    ],
    content: '화질도 좋고 화면 크기도 압도적입니다.',
    rating: 4,
    user: {
      userId: 102,
      nickname: '냠냠이',
      profileImageUrl: '',
    },
    imageInfo: [{ imageUrl: '', order: 1 }],
    heartCount: 10,
    createdAt: '2025-07-27T07:14:36Z',
  },
  {
    id: 3,
    movieSeatInfo: {
      movieTitle: '드래곤 길들이기',
      theaterName: '남양주현대아울렛 스페이스원',
      auditoriumName: '2관',
      seatNumber: 'A1',
    },
    hashtags: [
      { hashTagId: 6, hashTagName: '음질만족' },
      { hashTagId: 7, hashTagName: '출입구근처' },
    ],
    content: '사운드도 좋고 스크린도 컸는데 문이랑 가까워서 외부 소음이 조금 거슬렸어요 ㅎㅎ',
    rating: 3.5,
    user: {
      userId: 103,
      nickname: '김씨잇',
      profileImageUrl: '',
    },
    imageInfo: [
      { imageUrl: '', order: 1 },
      { imageUrl: '', order: 2 },
    ],
    heartCount: 34,
    createdAt: '2025-07-27T07:14:36Z',
  },
  {
    id: 4,
    movieSeatInfo: {
      movieTitle: '드래곤 길들이기',
      theaterName: '남양주현대아울렛 스페이스원',
      auditoriumName: '2관',
      seatNumber: 'A1',
    },
    hashtags: [
      { hashTagId: 6, hashTagName: '음질만족' },
      { hashTagId: 7, hashTagName: '출입구근처' },
    ],
    content: '사운드도 좋고 스크린도 컸는데 문이랑 가까워서 외부 소음이 조금 거슬렸어요 ㅎㅎ',
    rating: 3.5,
    user: {
      userId: 103,
      nickname: '김씨잇',
      profileImageUrl: '',
    },
    imageInfo: [
      { imageUrl: '', order: 1 },
      { imageUrl: '', order: 2 },
    ],
    heartCount: 34,
    createdAt: '2025-07-27T07:14:36Z',
  },
  {
    id: 4,
    movieSeatInfo: {
      movieTitle: '위키드',
      theaterName: '남양주현대아울렛 스페이스원',
      auditoriumName: '1관',
      seatNumber: 'D4',
    },
    hashtags: [
      { hashTagId: 8, hashTagName: '주변산만' },
      { hashTagId: 9, hashTagName: '잡음있음' },
    ],
    content:
      '단차가 낮은 건지 앞사람 행동이 너무 거슬려요ㅜㅜ 그리고 상영관에서 냄새가 너무 마니 남!!!',
    rating: 2.5,
    user: {
      userId: 104,
      nickname: '박리츠',
      profileImageUrl: '',
    },
    imageInfo: [],
    heartCount: 7,
    createdAt: '2025-07-27T07:14:36Z',
  },
];
