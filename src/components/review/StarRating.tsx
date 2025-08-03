import { StarFill, StarHalf, StarLine } from '@/assets';

interface StarRatingProps {
  rating: number;
  color?: 'white' | 'red';
}

const StarRating = ({ rating, color = 'white' }: StarRatingProps) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  const colorClass = color === 'red' ? 'fill-red-300 text-red-300' : 'fill-white text-white';

  return (
    <div className="flex">
      {Array(full)
        .fill(0)
        .map((_, idx) => (
          <StarFill key={`full-${idx}`} className={`h-6 w-6 ${colorClass}`} />
        ))}
      {half && <StarHalf className={`h-6 w-6 ${colorClass}`} />}
      {Array(empty)
        .fill(0)
        .map((_, idx) => (
          <StarLine key={`empty-${idx}`} className={`h-6 w-6 ${colorClass}`} />
        ))}
    </div>
  );
};
export default StarRating;
