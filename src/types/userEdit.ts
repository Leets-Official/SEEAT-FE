export interface UpdateUserProfileRequest {
  nickname: string;
  imageUrl?: string | null;
  genres?: string[];
  auditoriums?: string[];
}

export interface UserProfileResponse {
  nickname: string;
  imageUrl: string | null;
  genres: string[];
  auditoriums: string[];
}