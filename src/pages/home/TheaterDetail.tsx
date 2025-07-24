import { useNavigate, useParams } from 'react-router-dom';
import { Header, Image, Badge, ReviewCard } from '@/components';
import { StarSmall, ArrowRight } from '@/assets';
import { getRandomImage, cinemaDetailMock } from '@/__mocks';

const CinemaDetailPage = () => {
  const navigate = useNavigate();
  const { tab, cinemaName } = useParams<{
    tab: 'IMAX' | 'Dolby Cinema';
    cinemaName: string;
  }>();

  if (!tab || !cinemaName) {
    return <div>잘못된 접근입니다</div>;
  }

  const decodeCinemaName = decodeURIComponent(cinemaName);

  const cinema = cinemaDetailMock.find((c) => c.name === decodeCinemaName);

  const {
    screenSize = '정보 없음',
    format = '정보 없음',
    sound = '정보 없음',
    rating = 0,
    reviewCount = 0,
    reviews = [],
  } = cinema ?? {};

  const imgUrl = getRandomImage(246, 142);

  return (
    <div className="flex min-h-screen max-w-[430px] flex-col bg-gray-900 pt-11 pb-5">
      <div className="fixed top-0 right-0 left-0 z-50 bg-gray-900">
        <Header
          title=""
          showBack
          onBackClick={() => navigate('/theaters')}
          showBookmark={false}
          showLike={false}
        />
      </div>
      <div className="w-full px-5 pt-5">
        {/*영화관(상영관) 이름*/}
        <h2 className="text-title-2 text-left text-white">{decodeCinemaName}</h2>
        <div className="mt-2 flex items-center">
          <StarSmall className="mr-1 h-4 w-4" />
          <span className="text-caption-1 mr-3 pt-[2px] text-white">{rating}</span>
          <span className="text-caption-3 mr-1 pt-[2px] text-gray-500">후기</span>
          <span className="text-caption-1 pt-[2px] text-white">{reviewCount}</span>
        </div>
        <div className="my-5 w-[335px] border-t border-gray-800" />
        <div className="text-title-3 text-white">좌석 배치도</div>
        <div className="text-caption-3 pt-1 text-red-300">
          배치도를 클릭하여 각 좌석의 후기를 볼 수 있어요
        </div>
        {/*배치도 사진 들어갈 부분*/}
        <div className="pt-3">
          <div className="justify-center px-16 py-[34px]">
            <Image src={imgUrl} aspectRatio="aspect-[246/142]" />
          </div>
        </div>

        {/*상세 정보*/}
        <div className="flex flex-col gap-y-3 pt-5">
          <div className="flex items-center gap-4">
            <Badge type="info" className="h-7 w-[85px] justify-center">
              스크린
            </Badge>
            <span className="text-caption-2 text-white">{screenSize}</span>
          </div>
          <div className="flex items-center gap-4">
            <Badge type="info" className="h-7 w-[85px] justify-center">
              영사 포맷
            </Badge>
            <span className="text-caption-2 text-white">{format}</span>
          </div>
          <div className="flex items-center gap-4">
            <Badge type="info" className="h-7 w-[85px] justify-center">
              음향
            </Badge>
            <span className="text-caption-2 text-white">{sound}</span>
          </div>
        </div>

        {/*후기*/}
        <div className="mt-9">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-title-3">후기</p>
            <button
              onClick={() => navigate(`/theaters/${tab}/${encodeURIComponent(cinemaName)}/reviews`)}
            >
              <ArrowRight className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {reviews.slice(0, 3).map((review) => (
              <ReviewCard
                key={review.id}
                imageUrl={getRandomImage(82, 82)}
                tags={review.tags}
                title={decodeCinemaName}
                description={review.content}
                likeCount={review.likes}
                onClick={() => navigate(`/theaters/${tab}/${cinemaName}/review/${review.id}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CinemaDetailPage;
