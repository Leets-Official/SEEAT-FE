export interface User {
  userId: number;
  nickname: string;
  profileImageUrl: string | null;
}

export interface UserProfile extends User {
  level: number;
  email: string;
  progress: number;
  preferredGenres: string[];
  favoriteTheaters: string[];
}
