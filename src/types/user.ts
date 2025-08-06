export interface Auditorium {
  id: string; 
  theaterName: string;
  name: string;
  type: string;
}

export interface UserProfile {
  id: number;
  email: string;
  socialId: string;
  username: string;
  nickname: string;
  imageUrl: string | null;
  grade: string;
  genres: string[];
  social: 'KAKAO' | 'NAVER';
  auditoriums: Auditorium[];
  level?: number;
  levelExp: number; 
  reviewCount: number; 
  likeCount: number;  
}

export interface ReviewerProfile {
  userId: number;
  nickname: string;
  profileImageUrl: string | null;
}

export interface UserProfileUpdateResponse {
  nickname: string;
  imageUrl: string | null; 
  genres: string[];
  auditoriums: Auditorium[];  
}

export interface UserProfileUpdateRequest {
  nickname: string;
  image?: string | null;
  genres?: string[];
  auditoriumIds?: string[];
}
export interface User {
  userId: number;
  nickname: string;
<<<<<<< HEAD
  profileImageUrl: string | null;
}

export interface UserProfile {
  nickname: string;
  imageUrl: string | null;
  genres: string[];
  auditoriums: string[];
=======
  profileImageUrl: string;
>>>>>>> 682b26a74ca1c2aaaec457c7d52ecfc9d3a083ef
}