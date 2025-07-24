export type Review = {
  id: number;
  user: string;
  rating: number;
  content: string;
  likes: number;
  tags: string[];
  movieTitle: string;
  seatInfo: string;
};

export type Cinema = {
  name: string; // ex) 남양주현대아울렛 스페이스원 (1관)
  screenSize?: string;
  format?: string;
  sound?: string;
  rating?: number;
  reviewCount?: number;
  reviews?: Review[];
};

export const cinemaDetailMock: Cinema[] = [
  {
    name: '남양주현대아울렛 스페이스원 (1관)',
    screenSize: '22m x 12m',
    format: '4K Laser',
    sound: 'Dolby Atmos',
    rating: 3.7,
    reviewCount: 7,
    reviews: [
      {
        id: 1,
        user: 'Leets',
        rating: 5,
        content: 'IMAX 사운드는 정말 감동적이에요. 앉은 좌석도 시야 확보 최고였습니다.',
        likes: 22,
        tags: ['음향최고', '시야좋음', '자녀와'],
        movieTitle: '명탐정 코난',
        seatInfo: 'F6, F12',
      },
      {
        id: 2,
        user: 'Juno',
        rating: 4,
        content: '화질도 좋고 화면 크기도 압도적입니다.',
        likes: 10,
        tags: ['화질굿', '대형스크린'],
        movieTitle: '범죄도시4',
        seatInfo: 'E10',
      },
      {
        id: 3,
        user: 'Leets',
        rating: 5,
        content: 'IMAX 사운드는 정말 감동적이에요. 앉은 좌석도 시야 확보 최고였습니다.',
        likes: 22,
        tags: ['음향최고', '시야좋음', '자녀와'],
        movieTitle: '명탐정 코난',
        seatInfo: 'F6, F12',
      },
      {
        id: 4,
        user: '김씨잇',
        rating: 3.5,
        content: '사운드도 좋고 스크린도 컸는데 문이랑 가까워서 외부 소음이 조금 거슬렸어요 ㅎㅎ',
        likes: 34,
        tags: ['음질만족', '출입구근처'],
        movieTitle: '드래곤 길들이기',
        seatInfo: 'A1',
      },
      {
        id: 5,
        user: '박리츠',
        rating: 2.5,
        content:
          '단차가 낮은 건지 앞사람 행동이 너무 거슬려요ㅜㅜ 그리고 상영관에서 냄새가 너무 마니 남!!! 뮤지컬 영화인데 잡음이 거슬렸어요',
        likes: 7,
        tags: ['주변산만', '잡음있음'],
        movieTitle: '위키드',
        seatInfo: 'D4',
      },
    ],
  },
  {
    name: '남양주현대아울렛 스페이스원 (2관)',
    screenSize: '20m x 10m',
    format: 'Digital',
    sound: 'Dolby 7.1',
    rating: 3.2,
    reviewCount: 3,
    reviews: [
      {
        id: 6,
        user: 'Mina',
        rating: 3,
        content: '음향은 괜찮았지만, 좌석이 다소 불편했어요.',
        likes: 4,
        tags: ['좌석불편', '음향좋음'],
        movieTitle: '듄2',
        seatInfo: 'D9',
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
        seatInfo: 'D4',
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
        seatInfo: 'D4',
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
        seatInfo: 'D4',
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
        seatInfo: 'D4',
      },
    ],
  },
];
