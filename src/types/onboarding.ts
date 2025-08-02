export type GenreType =
  | '액션'
  | '호러'
  | '스릴러'
  | '코미디'
  | 'SF'
  | '로맨스'
  | '판타지'
  | '미스터리'
  | '범죄'
  | '모험'
  | '전쟁'
  | '역사'
  | '뮤지컬'
  | '애니메이션'
  | '드라마'
  | '다큐';

export const genreOptions: GenreType[] = [
  '액션',
  '호러',
  '스릴러',
  '코미디',
  'SF',
  '로맨스',
  '판타지',
  '미스터리',
  '범죄',
  '모험',
  '전쟁',
  '역사',
  '뮤지컬',
  '애니메이션',
  '드라마',
  '다큐',
];

export type CinemaType = string;

export type CinemaFormat = 'IMAX' | 'Dolby';

export const theaterData: Record<CinemaFormat, CinemaType[]> = {
  IMAX: [],
  Dolby: [
    '남양주현대아울렛 스페이스원',
    '대구 신세계(동대구)',
    '대전신세계아트앤사이언스',
    '송도(트리플스트리트)',
    '수원AK플라자(수원역)',
    '안성스타필드',
    '코엑스',
  ],
};
