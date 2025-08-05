export interface UserGradeResponse {
  id: number;
  email: string;
  socialId: string;
  username: string;
  nickname: string;
  imageUrl: string | null;
  grade: number;
  genres: string[];
  social: 'KAKAO' | 'NAVER';
  auditoriums: string[];
  reviewCount: number;
  likeCount: number;
  levelExp: number;
}
