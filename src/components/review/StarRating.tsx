import { StarFill, StarHalf, StarLine } from '@/assets';

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="flex gap-1">
      {Array(full)
        .fill(0)
        .map((_, idx) => (
          <StarFill key={`full-${idx}`} className="h-6 w-6 fill-white text-white" />
        ))}
      {half && <StarHalf className="h-6 w-6 fill-white text-white" />}
      {Array(empty)
        .fill(0)
        .map((_, idx) => (
          <StarLine key={`empty-${idx}`} className="h-6 w-6 stroke-white text-white" />
        ))}
    </div>
  );
};
export default StarRating;
