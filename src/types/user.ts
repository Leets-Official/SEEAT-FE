export interface User {
  userId: number;
  nickname: string;
  profileImageUrl: string | null;
}

export interface UserProfile {
  nickname: string;
  imageUrl: string | null;
  genres: string[];
  auditoriums: string[];
}