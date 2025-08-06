import { ReviewCard, BestCinemaCard, BottomNavigation, Image, Header } from '@/components';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, DolbyImage, HomeBanner, ImaxImage, PlusIcon } from '@/assets';
import { getRandomImage } from '@/__mocks';
import CinemaTypeButton from '@/components/home/CinemaTypeButton';
import { useEffect, useState } from 'react';
import { fetchPopularReviews } from '@/api/home/popularReview.api';
import type { PopularReview } from '@/types/review';
import type { BestCinema } from '@/types/bestCinema';
import { getBestCinemas } from '@/api/home/bestCinemas.api';
import type { ApiError } from '@/types/api-response';

const HomePage = () => {
  const navigate = useNavigate();
  const [popularReviews, setPopularReviews] = useState<PopularReview[]>([]);
  const [bestCinemaList, setBestCinemaList] = useState<BestCinema[]>([]);

  const handleGoToPopular = () => {
    navigate('/review/popular');
  };

  useEffect(() => {
    const loadPopular = async () => {
      try {
        const data = await fetchPopularReviews(1, 4);
        setPopularReviews(data);
      } catch (error) {
        const apiError = error as ApiError;
        console.error('불러오기 실패:', apiError.message, apiError.error);
      }
    };
    loadPopular();
  }, []);

  useEffect(() => {
    const loadBestCinemas = async () => {
      try {
        const data = await getBestCinemas(1, 4);
        setBestCinemaList(data);
      } catch (error) {
        const apiError = error as ApiError;
        console.error('불러오기 실패:', apiError.message, apiError.error);
      }
    };
    loadBestCinemas();
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header leftSection="LOGO" rightSection="SETTING" className="bg-gray-900" />
      {/* 이미지?*/}
      <div className="pt-[44px]">
        <div className="mx-auto w-full max-w-[430px]">
          <Image src={HomeBanner} className="w-full" />
        </div>
        <div className="mx-auto w-full px-5">
          {/*영화관 리스트 선택*/}
          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-title-3">영화관 리스트</p>
            </div>
            <div className="mt-3 flex justify-center gap-4">
              <CinemaTypeButton tab="imax">
                <ImaxImage />
              </CinemaTypeButton>
              <CinemaTypeButton tab="dolby">
                <DolbyImage />
              </CinemaTypeButton>
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
              {Array.isArray(bestCinemaList) &&
                bestCinemaList.map((cinema, idx) => (
                  <BestCinemaCard
                    key={cinema.auditoriumId}
                    rank={idx + 1}
                    imageUrl={getRandomImage()} //추후 이미지 추가되면 교체
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
