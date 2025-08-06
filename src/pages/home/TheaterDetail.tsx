import { useNavigate, useParams } from 'react-router-dom';
import { Header, Image, ReviewCard, TagCardList } from '@/components';
import { StarSmall, ArrowRight, SmileIcon } from '@/assets';
import { useEffect, useState } from 'react';
import { getTheatersDetail, getTheaterSummary } from '@/api/theater/theater.api';
import type { GetTheatersDetailResponse, TheaterSummaryResponse } from '@/api/theater/theater.api';
import type { ApiError } from '@/types/api-response';
import { getAuditoriumReviews } from '@/api/review/getAuditoriumReviews.api';
import type { ReviewSummary } from '@/types/review';
import { getTheaterTags } from '@/api/hashtag/hashtag.api';
import type { TheaterHashtag } from '@/api/hashtag/hashtag.api';
//추후 태그 타입 들어오면 수정하기

const CinemaDetailPage = () => {
  const { auditoriumId } = useParams<{ auditoriumId: string }>();
  const navigate = useNavigate();

  const [cinema, setCinema] = useState<GetTheatersDetailResponse | null>(null);
  const [reviews, setReviews] = useState<ReviewSummary[]>([]);
  const [summary, setSummary] = useState<string | null>(null);
  const [hashtags, setHashtags] = useState<TheaterHashtag[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auditoriumId) return;
    const fetchTheatersDetail = async () => {
      try {
        const res = await getTheatersDetail(auditoriumId);
        setCinema(res);
      } catch (error) {
        const apiError = error as ApiError;
        console.error('상영관 정보 불러오기 실패:', apiError.error, apiError.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTheatersDetail();
  }, [auditoriumId]);

  useEffect(() => {
    if (!auditoriumId) return;
    const fetchReviews = async () => {
      try {
        const res = await getAuditoriumReviews({
          auditoriumId,
          page: 1,
          size: 3,
          sort: 'likes',
        });
        setReviews(res.content);
      } catch (error) {
        const apiError = error as ApiError;
        console.error('리뷰 불러오기 실패', apiError.error, apiError.message);
      }
    };
    fetchReviews();
  }, [auditoriumId]);

  useEffect(() => {
    if (!auditoriumId) return;
    const fetchSummary = async () => {
      try {
        const res: TheaterSummaryResponse = await getTheaterSummary(auditoriumId);
        setSummary(res.summary);
      } catch (error) {
        const apiError = error as ApiError;
        console.error('요약 불러오기 실패', apiError.error, apiError.message);
      }
    };
    fetchSummary();
  }, [auditoriumId]);

  useEffect(() => {
    if (!auditoriumId) return;
    const fetchTags = async () => {
      try {
        const res = await getTheaterTags(auditoriumId);
        setHashtags(res);
      } catch (error) {
        const apiError = error as ApiError;
        console.error('해시태그 불러오기 실패:', apiError.error, apiError.message);
      }
    };
    fetchTags();
  }, [auditoriumId]);

  const title = cinema?.theaterName
    ? cinema.auditoriumName
      ? `${cinema.theaterName} (${cinema.auditoriumName})`
      : cinema.theaterName
    : '영화관 정보 없음';

  const reviewCount = cinema?.reviewCount;
  const rating = cinema?.averageReview.toFixed?.(1);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        상영관 정보를 불러오는 중입니다...
      </div>
    );
  }
  return (
    <div className="flex min-h-screen max-w-[430px] flex-col pt-11 pb-5">
      <Header leftSection="BACK" className="bg-gray-900" />
      <div className="mx-auto w-full max-w-[430px] px-5 pt-5">
        {/*영화관(상영관) 이름*/}
        <div className="text-title-2 text-left text-white">{title}</div>
        <div className="mt-2 flex items-center">
          <StarSmall className="mr-1 h-4 w-4" />
          <span className="text-caption-1 mr-3 pt-[2px] text-white">{rating}</span>
          <span className="text-caption-3 mr-1 pt-[2px] text-gray-500">후기</span>
          <span className="text-caption-1 pt-[2px] text-white">{reviewCount}</span>
        </div>
        <div className="my-5 w-full border-t border-gray-800" />
        <div className="text-title-3 text-white">좌석 배치도</div>
        <div className="text-caption-3 pt-1 text-red-300">
          배치도를 클릭하여 각 좌석의 후기를 볼 수 있어요
        </div>
        {/*배치도 사진 들어갈 부분*/}
        <div className="pt-3">
          <div className="max-w-[430px] justify-center bg-gray-950">
            {cinema?.imageUrl && <Image src={cinema.imageUrl} className="w-full" />}
          </div>
        </div>

        {/*AI 후기 요약*/}
        <div className="mt-5 mb-10 flex flex-col rounded-lg border border-gray-500 px-4 py-3">
          <div className="text-caption-1 flex items-center gap-1 text-red-300">
            <SmileIcon />
            <span>AI 후기 요약</span>
          </div>
          <div className="text-caption-2 mt-1 text-gray-300">{summary}</div>
        </div>

        {/*많이 사용된 태그*/}
        <TagCardList
          tags={hashtags.map(({ hashType, hashTagName, count }) => ({
            iconType: hashType as '음향' | '관람환경' | '동반인',
            title: hashTagName,
            count,
          }))}
        />

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
                key={review.reviewId}
                imageUrl={review.thumbnailUrl}
                tags={review.hashtags.map((h) => h.hashTagName)}
                title={review.title}
                description={review.content}
                likeCount={review.heartCount}
                onClick={() => navigate(`/review/${review.reviewId}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CinemaDetailPage;
