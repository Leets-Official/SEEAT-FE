export type BaseReviewCardProps = {
  imageUrl: string;
  tags: string[];
  title: string;
  likeCount: number;
  onClick?: () => void;
};

export type DefaultReviewCardProps = BaseReviewCardProps & {
  variant?: 'default';
  description: string;
};

export type RatingReviewCardProps = BaseReviewCardProps & {
  variant: 'rating';
  date: string;
  rating: number;
};

export type ReviewCardProps = DefaultReviewCardProps | RatingReviewCardProps;
