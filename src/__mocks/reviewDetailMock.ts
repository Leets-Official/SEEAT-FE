import type { ReviewDetail } from '@/types/review';

export const reviewDetailMock: ReviewDetail[] = [
  {
    id: 1,
    movieSeatInfo: {
      movieTitle: '어벤져스: 엔드게임',
      theaterName: '남양주현대아울렛 스페이스원',
      auditoriumName: '1관',
      seatNumber: 'F6, F12',
    },
    hashtags: [
      {
        hashTagId: 1,
        hashTagName: '음향최고',
        hashTagType: '음향',
      },
      { hashTagId: 2, hashTagName: '시야좋음', hashTagType: '관람환경' },
      { hashTagId: 3, hashTagName: '자녀와', hashTagType: '동반인' },
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
      { hashTagId: 4, hashTagName: '화질굿', hashTagType: '관람환경' },
      { hashTagId: 5, hashTagName: '대형스크린', hashTagType: '관람환경' },
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
      { hashTagId: 6, hashTagName: '음질만족', hashTagType: '음향' },
      { hashTagId: 7, hashTagName: '출입구근처', hashTagType: '관람환경' },
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
      { hashTagId: 6, hashTagName: '음질만족', hashTagType: '음향' },
      { hashTagId: 7, hashTagName: '출입구근처', hashTagType: '관람환경' },
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
    id: 5,
    movieSeatInfo: {
      movieTitle: '위키드',
      theaterName: '남양주현대아울렛 스페이스원',
      auditoriumName: '1관',
      seatNumber: 'D4',
    },
    hashtags: [
      { hashTagId: 8, hashTagName: '주변산만', hashTagType: '관람환경' },
      { hashTagId: 9, hashTagName: '잡음있음', hashTagType: '음향' },
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
/*
  {
    id: 6,
    user: 'Mina',
    rating: 3,
    content:
      '음향은 괜찮았지만, 좌석이 불편했어요. 단어 자동 줄바꿈 wowowoowowowoowowow \n 줄바꿈 적용되는지 그리고 리뷰도 이렇게 길어지면 어떻게 보이는지 확인용 길어지면 이상하게 보일 수도 잇은니까 어쩌고저쩌고 이만큼 길게 길게 길게',
    likes: 4,
    tags: ['좌석불편', '음향좋음', '이렇게', '많아지면', '어떻게', '보이는지', '확인용'],
    movieTitle: '듄2',
    seatInfo: ['D9'],
    cinemaName: '남양주현대아울렛 스페이스원 (2관)',
    imageUrls: [getRandomImage(82, 82)],
  },
  {
    id: 7,
    user: '박리츠',
    rating: 4.5,
    content:
      '단차가 낮은 건지 앞사람 행동이 너무 거슬려요ㅜㅜ 그리고 상영관에서 냄새가 너무 마니 남!!!',
    likes: 24,
    tags: ['주변산만', '잡음있음'],
    movieTitle: '드래곤 길들이기',
    seatInfo: ['D4'],
    cinemaName: '남양주현대아울렛 스페이스원 (2관)',
  },
  {
    id: 8,
    user: '박리츠',
    rating: 4.5,
    content:
      '단차가 낮은 건지 앞사람 행동이 너무 거슬려요ㅜㅜ 그리고 상영관에서 냄새가 너무 마니 남!!!',
    likes: 24,
    tags: ['주변산만', '잡음있음'],
    movieTitle: '드래곤 길들이기',
    seatInfo: ['D4'],
    cinemaName: '남양주현대아울렛 스페이스원 (2관)',
    imageUrls: [getRandomImage(82, 82), getRandomImage(82, 82)],
  },
  {
    id: 9,
    user: '박리츠',
    rating: 4.5,
    content:
      '단차가 낮은 건지 앞사람 행동이 너무 거슬려요ㅜㅜ 그리고 상영관에서 냄새가 너무 마니 남!!!',
    likes: 24,
    tags: ['주변산만', '잡음있음'],
    movieTitle: '드래곤 길들이기',
    seatInfo: ['D4'],
    cinemaName: '남양주현대아울렛 스페이스원 (2관)',
    imageUrls: [getRandomImage(82, 82)],
  },
  {
    id: 10,
    user: '박리츠',
    rating: 4.5,
    content:
      '단차가 낮은 건지 앞사람 행동이 너무 거슬려요ㅜㅜ 그리고 상영관에서 냄새가 너무 마니 남!!!',
    likes: 24,
    tags: ['주변산만', '잡음있음'],
    movieTitle: '드래곤 길들이기',
    seatInfo: ['D4'],
    cinemaName: '남양주현대아울렛 스페이스원 (2관)',
  },
];*/
