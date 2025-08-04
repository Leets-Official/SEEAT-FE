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

export interface PopularReview {
  reviewId: number;
  thumbnailUrl: string;
  hashtags: string[];
  movieTitle: string;
  theaterName: string;
  title: string;
  content: string;
  userId: number;
  nickname: string;
  profileImageUrl: string;
  heartCount: number;
  originalCreatedAt: string;
  createdAt: string;
}

export interface PopularReviewResponse {
  content: PopularReview[];
  hasNext: boolean;
  page: number;
  size: number;
}

export interface ReviewUser {
  userId: number;
  nickname: string;
  profileImageUrl: string;
}

export interface ReviewItem {
  reviewId: number;
  thumbnailUrl: string;
  hashtags: Hashtag[];
  title: string;
  content: string;
  user: ReviewUser;
  heartCount: number;
  createdAt: string;
  rating: number;
}

export interface SeatReviewBlock {
  theaterName: string;
  seatName: string;
  reviewCount: number;
  averageRating: number;
  reviews: ReviewItem[];
}
