import { StarRating } from '@/components';

type RatingCardProps = {
  userName: string;
  rating: number;
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
        <div className="pt-1">
          <StarRating rating={rating} />
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
