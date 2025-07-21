import { HomeHeader, ReviewCard, BestCinemaCard, BottomNavigation, Image } from '@/components';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from '@/assets';
import { popularReviews, bestCinemas, getRandomImage } from '@/__mocks';
import { PlusIcon } from '@/assets';

const HomePage = () => {
  const navigate = useNavigate();
  const imgUrl = getRandomImage(375, 210);

  const handleGoToPopular = () => {
    navigate('/review/popular');
  };

  return (
    <div className="flex min-h-screen flex-col py-5 pb-[172px]">
      <div className="fixed top-0 right-0 left-0 z-50 bg-gray-900">
        <HomeHeader />
      </div>
      {/* 이미지?*/}
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
            <button
              onClick={() => navigate('/thaeaters?tab=imax')}
              className="rounded-m flex h-[163px] w-[166px] flex-col items-center bg-gray-800"
            >
              {/*로고 자리*/}
              <div className="mt-5 aspect-square w-[60%] bg-gray-700" />
              <p className="mt-2 text-xl text-white">IMAX</p>
            </button>
            <button
              onClick={() => navigate('/thaeaters?tab=imax')}
              className="rounded-m flex h-[163px] w-[166px] flex-col items-center bg-gray-800"
            >
              {/*로고 자리*/}
              <div className="mt-5 aspect-square w-[60%] bg-gray-700" />
              <p className="mt-2 text-xl text-white">Dolby Cinema</p>
            </button>
          </div>
        </div>

        {/*인기 있는 후기*/}
        <div className="mt-12">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-title-3">인기 있는 후기</p>
            <button onClick={handleGoToPopular}>
              <ArrowRight className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {popularReviews.map((review) => (
              <ReviewCard
                key={review.id}
                imageUrl={review.imageUrl}
                tags={review.tags}
                title={review.title}
                description={review.description}
                likeCount={review.likeCount}
                onClick={() => navigate(`review/${review.id}`)}
              />
            ))}
          </div>
        </div>

        {/*베스트 상영관*/}
        <div className="mt-12">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-title-3">베스트 상영관</p>
          </div>

          <div className="grid w-full grid-cols-2 gap-x-2 gap-y-3">
            {bestCinemas.map((cinema) => (
              <BestCinemaCard
                key={cinema.rank}
                rank={cinema.rank}
                imageUrl={cinema.imageUrl}
                title={cinema.title}
                rating={cinema.rating}
                reviewCount={cinema.reviewCount}
                onClick={() => navigate(`/cinema/${cinema.id}`)}
              />
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={() => navigate('/review')} // 원하는 경로로 변경 가능
        className="rounded-m fixed right-5 bottom-20 z-50 flex h-12 w-12 items-center justify-center bg-red-400 text-white shadow-md"
      >
        <PlusIcon className="h-6 w-6" />
      </button>

      {/*바텀네비*/}
      <BottomNavigation />
    </div>
  );
};
export default HomePage;
