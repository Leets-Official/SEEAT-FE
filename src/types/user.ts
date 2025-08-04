export interface User {
  userId: number;
  nickname: string;
  profileImageUrl: string | null;
}

export interface UserProfile extends User {
  level: number;
  progress: number;
  preferredGenres: string[];
  favoriteTheaters: string[];
}
