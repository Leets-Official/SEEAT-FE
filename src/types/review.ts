import type { Hashtag } from './hashtag';
import type { MovieSeatInfo } from './movie';
import type { User } from './user';
import type { ReviewImage } from './image';

export interface ReviewSummary {
  id: number;
  user: User;
  movieSeatInfo: MovieSeatInfo;
  hashtags: Hashtag[];
  content: string;
  rating: number;
  imageInfo: ReviewImage[];
  heartCount: number;
  createdAt: string;
}

export interface ReviewDetail {
  id: number;
  movieSeatInfo: MovieSeatInfo;
  hashtags: Hashtag[];
  content: string;
  rating: number;
  user: User;
  imageInfo: ReviewImage[];
  heartCount: number;
  createdAt: string;
}
