import { StarFill, StarHalf, StarLine } from '@/assets';

type RatingCardProps = {
  userName: string;
  rating: number;
};

const renderStars = (rating: number) => {
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

const RatingCard = ({ userName, rating }: RatingCardProps) => {
  return (
    <div className="flex w-full max-w-[420px] items-center rounded-l bg-gray-700 px-8 py-4">
      {/* 왼쪽 캐릭터 이미지 자리...*/}
      <div className="aspect-square w-[110px] shrink-0 bg-white"></div>

      {/* 오른쪽 정보 */}
      <div className="ml-5 items-center">
        <div className="text-title-3 text-red-300">{userName}님의 평점은?</div>
        <div className="text-title-1 pt-3 text-white">{rating.toFixed(1)}점</div>
        <div className="pt-1">{renderStars(rating)}</div>
      </div>
    </div>
  );
};

export default RatingCard;
