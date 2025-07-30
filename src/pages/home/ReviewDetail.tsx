import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Header, Badge, RatingCard } from '@/components';
import { DefaultProfile } from '@/assets';
import { reviewDetailMock } from '@/__mocks/reviewDetailMock';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ReviewDetailPage = () => {
  const { reviewId } = useParams<{ reviewId: string }>();
  const navigate = useNavigate();
  //사진 슬라이드 시 현재 사진 위치...
  const [currentIndex, setCurrentIndex] = useState(0);

  const review = reviewDetailMock.find((r) => r.id === Number(reviewId));
  //경로 직접 입력되는 경우 대비
  if (!review) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
        <p>리뷰를 찾을 수 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen max-w-[430px] flex-col bg-gray-900 pb-5">
      <div className="fixed top-0 right-0 left-0 z-50">
        <Header title="" showBack onBackClick={() => navigate(-1)} />
      </div>
      <div className="w-full">
        {/*이미지 있을 때*/}
        {/*현재 상태: 드래그(슬라이드)해야 옆으로 넘어갑니다!*/}
        {review.imageInfo && review.imageInfo.length > 0 ? (
          <div className="relative aspect-square w-full bg-gray-300">
            <Swiper
              modules={[Pagination]}
              pagination={{
                el: '.swiper-pagination',
                type: 'fraction',
                clickable: true,
              }}
              onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
              spaceBetween={0}
              slidesPerView={1}
              className="h-full w-full"
            >
              {review.imageInfo.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img.imageUrl}
                    alt={`리뷰 이미지 ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/*상단 그래디언트*/}
            <div className="pointer-events-none absolute top-0 left-0 h-[100px] w-full bg-gradient-to-b from-black/40 to-transparent" />
            <span className="text-caption-3 absolute right-2 bottom-2 rounded-full bg-black/30 px-2 py-0.5 text-white">
              {`${currentIndex + 1} / ${review.imageInfo.length}`}
            </span>
          </div>
        ) : (
          <div className="h-11" />
        )}
      </div>

      <div className="w-full px-5 pt-5">
        <div className="text-title-2 text-left text-white">{`${review.movieSeatInfo.theaterName} (${review.movieSeatInfo.auditoriumName})`}</div>

        {/*유저 정보, 추후 API 연결 시 프로필 사진 받아와서 조건부로...*/}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-gray-500 bg-gray-950">
            <DefaultProfile className="h-5 w-5" />
          </div>
          <span className="text-body-1 text-white">{review.user.nickname}</span>
        </div>
        {/*상단 정보*/}
        <div className="flex flex-col gap-y-2 pt-3">
          <div className="flex items-center gap-2">
            <Badge type="info" className="h-7 w-[85px] justify-center">
              관람 영화
            </Badge>
            <span className="text-caption-2 text-white">{review.movieSeatInfo.movieTitle}</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge type="info" className="h-7 w-[85px] justify-center">
              좌석 정보
            </Badge>
            <span className="text-caption-2 text-white">{review.movieSeatInfo.seatNumber}</span>
          </div>
        </div>

        <div className="my-5 h-px w-full bg-gray-800" />

        {/*해시태그 영역*/}
        {review.hashtags && review.hashtags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-x-2 gap-y-3">
            {review.hashtags.map((tag, index) => (
              <Badge key={index} type="tag" size="md" className="text-caption-1 py-0.5">
                {tag.hashTagName}
              </Badge>
            ))}
          </div>
        )}

        {/*본문 영역*/}
        <div className="text-body-2 mt-4 pr-10 break-words whitespace-pre-line text-white">
          {review.content}
        </div>

        {/*별점 카드*/}
        <div className="mt-8">
          <RatingCard userName={review.user.nickname} rating={review.rating} />
        </div>
      </div>
    </div>
  );
};

export default ReviewDetailPage;
