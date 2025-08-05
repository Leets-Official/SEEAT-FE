import { useNavigate, useParams } from 'react-router-dom';
import { Header, Image, Badge, ReviewCard } from '@/components';
import { StarSmall, ArrowRight, SmileIcon } from '@/assets';
import { getRandomImage, reviewSummaryMock } from '@/__mocks';
import { cinemaData } from '@/constants';

const CinemaDetailPage = () => {
  const { auditoriumId } = useParams<{ auditoriumId: string }>();
  const navigate = useNavigate();
  const imgUrl = getRandomImage(246, 142);

  const cinema = Object.values(cinemaData)
    .flat()
    .find((c) => c.auditoriumId === auditoriumId);

  const title = cinema?.theaterName
    ? cinema.auditoriumName
      ? `${cinema.theaterName} (${cinema.auditoriumName})`
      : cinema.theaterName
    : '영화관 정보 없음';

  const infoList = [
    { label: '스크린', value: cinema?.screenSize },
    { label: '영사 포맷', value: '정보 없음' }, //스웨거에 없는 것 같습니다...
    { label: '음향', value: cinema?.soundType },
  ];

  const reviews = reviewSummaryMock.filter(
    (review) =>
      review.movieSeatInfo.theaterName === cinema?.theaterName &&
      review.movieSeatInfo.auditoriumName === cinema?.auditoriumName,
  );
  const reviewCount = cinema?.reviewCount;

  const rating = cinema?.averageReview.toFixed?.(1);

  return (
    <div className="flex min-h-screen flex-col pt-11 pb-5">
      <Header leftSection="BACK" className="bg-gray-900" />
      <div className="w-full px-5 pt-5">
        {/*영화관(상영관) 이름*/}
        <div className="text-title-2 text-left text-white">{title}</div>
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

        {/*AI 후기 요약*/}
        <div className="mt-5 flex flex-col rounded-lg border border-gray-500 px-4 py-3">
          <div className="text-caption-1 flex items-center gap-1 text-red-300">
            <SmileIcon />
            <span>AI 후기 요약</span>
          </div>
          <div className="text-caption-2 mt-1 text-gray-300">어쩌고저쩌고 후기 내용</div>
        </div>

        {/*상세 정보*/}
        <div className="flex flex-col gap-y-3 pt-5">
          {infoList.map(({ label, value }) => (
            <div key={label} className="flex items-center gap-4">
              <Badge type="info" className="h-7 w-[85px] justify-center">
                {label}
              </Badge>
              <span className="text-caption-2 text-white">{value || '정보 없음'}</span>
            </div>
          ))}
        </div>

        {/*후기*/}
        <div className="mt-9">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-title-3">후기</p>
            <button onClick={() => navigate(`/theaters/${auditoriumId}/reviews`)}>
              <ArrowRight className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {reviews.slice(0, 3).map((review) => (
              <ReviewCard
                key={review.id}
                imageUrl={getRandomImage(82, 82)}
                tags={review.hashtags.map((h) => h.hashTagName)}
                title={title}
                description={review.content}
                likeCount={review.heartCount}
                onClick={() => navigate(`/review/${review.id}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CinemaDetailPage;
