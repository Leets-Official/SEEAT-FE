import { ReviewCard, BestCinemaCard, BottomNavigation, Image, Header } from '@/components';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, PlusIcon } from '@/assets';
import { bestCinemas, getRandomImage } from '@/__mocks';
import CinemaTypeButton from '@/components/home/CinemaTypeButton';
import { useEffect, useState } from 'react';
import { fetchPopularReviews } from '@/api/popular';
import type { PopularReview } from '@/types/review';

const HomePage = () => {
  const navigate = useNavigate();
  const imgUrl = getRandomImage(375, 210);
  const [popularReviews, setPopularReviews] = useState<PopularReview[]>([]);

  const handleGoToPopular = () => {
    navigate('/review/popular');
  };
  useEffect(() => {
    const loadPopular = async () => {
      try {
        const data = await fetchPopularReviews(1, 4);
        setPopularReviews(data.content);
      } catch (error) {
        console.error('불러오기 실패', error);
      }
    };
    loadPopular();
  }, []);

  return (
    <div className="flex min-h-screen flex-col py-5">
      <Header leftSection="LOGO" rightSection="SETTING" />
      {/* 이미지?*/}
      <div className="pt-[48px]">
        <div className="mx-auto w-full max-w-[430px] bg-gray-700 pt-6">
          <Image src={imgUrl} aspectRatio="aspect-[375/210]" className="w-full" />
        </div>
        <div className="mx-auto w-full px-5">
          {/*영화관 리스트 선택*/}
          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-title-3">영화관 리스트</p>
            </div>
            <div className="flex justify-center gap-3">
              <CinemaTypeButton label="IMAX" tab="imax" />
              <CinemaTypeButton label="Dolby Cinema" tab="dolby" />
            </div>
          </div>

          {/*인기 있는 후기*/}
          <div className="mt-12">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-title-3">인기 있는 후기</p>
              <ArrowRight
                className="h-5 w-5 cursor-pointer text-white"
                onClick={handleGoToPopular}
              />
            </div>

            <div className="flex flex-col gap-3">
              {popularReviews.map((review) => (
                <ReviewCard
                  key={review.reviewId}
                  imageUrl={review.thumbnailUrl}
                  tags={review.hashtags}
                  title={review.title}
                  description={review.content}
                  likeCount={review.heartCount}
                  onClick={() => navigate(`/review/${review.reviewId}`)}
                />
              ))}
            </div>
          </div>

          {/*베스트 상영관*/}
          <div className="mt-12 pb-[172px]">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-title-3">베스트 상영관</p>
            </div>

            <div className="grid w-full grid-cols-2 gap-x-2 gap-y-3">
              {bestCinemas.map((cinema) => (
                <BestCinemaCard
                  key={cinema.rank}
                  rank={cinema.rank}
                  imageUrl={cinema.imageUrl}
                  title={cinema.auditoriumName}
                  rating={cinema.avgRating}
                  reviewCount={cinema.reviewCount}
                  onClick={() => navigate(`/theaters/${cinema.auditoriumId}`)}
                />
              ))}
            </div>
          </div>
        </div>
        {/*플로팅 버튼*/}
        <div className="sticky bottom-20 z-40 mx-auto mt-10 flex w-full max-w-[430px] justify-end px-5">
          <button
            onClick={() => navigate('/review')}
            className="rounded-m flex h-12 w-12 items-center justify-center bg-red-400 text-white shadow-md"
          >
            <PlusIcon className="h-6 w-6" />
          </button>
        </div>

        {/*바텀네비*/}
        <BottomNavigation />
      </div>
    </div>
  );
};
export default HomePage;
