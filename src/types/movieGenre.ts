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

export type GenreEnType =
  | 'ACTION'
  | 'HORROR'
  | 'THRILLER'
  | 'COMEDY'
  | 'SF'
  | 'ROMANCE'
  | 'FANTASY'
  | 'MYSTERY'
  | 'CRIME'
  | 'ADVENTURE'
  | 'WAR'
  | 'HISTORY'
  | 'MUSICAL'
  | 'ANIMATION'
  | 'DRAMA'
  | 'DOCUMENTARY';

export const genreMap: Record<GenreType, GenreEnType> = {
  액션: 'ACTION',
  호러: 'HORROR',
  스릴러: 'THRILLER',
  코미디: 'COMEDY',
  SF: 'SF',
  로맨스: 'ROMANCE',
  판타지: 'FANTASY',
  미스터리: 'MYSTERY',
  범죄: 'CRIME',
  모험: 'ADVENTURE',
  전쟁: 'WAR',
  역사: 'HISTORY',
  뮤지컬: 'MUSICAL',
  애니메이션: 'ANIMATION',
  드라마: 'DRAMA',
  다큐: 'DOCUMENTARY',
};
