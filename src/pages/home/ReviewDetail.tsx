import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Header,
  Badge,
  RatingCard,
  ProfileImageWithFallback,
  ConfirmModal,
  Loading,
} from '@/components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { getReviewDetail } from '@/api/review/getReviewDetail.api';
import type { ReviewDetail } from '@/types/review';
import type { ApiError } from '@/types/api-response';
import { cn } from '@/utils/cn';
import { useModalStore, useToastStore } from '@/store';
import ActionModal from '@/components/common/Modal/ActionModal';
import { deleteReview } from '@/api/review/reviewDelete.api';

const ReviewDetailPage = () => {
  const navigate = useNavigate();
  const { closeModal } = useModalStore();
  const { show } = useToastStore();
  const { reviewId } = useParams<{ reviewId: string }>();
  const [review, setReview] = useState<ReviewDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const { openModal, modalType } = useModalStore();
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  //사진 슬라이드 시 현재 사진 위치...
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolledPastImage, setIsScrolledPastImage] = useState(false);
  useEffect(() => {
    if (!review || !review.imageInfo || review.imageInfo.length === 0) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const imageHeight = window.innerWidth;
      setIsScrolledPastImage(scrollY > imageHeight - 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [review]);

  const handleDelete = async () => {
    if (!reviewId) return;

    try {
      await deleteReview(Number(reviewId));
      show('후기가 삭제되었어요.');
      navigate('/home');
    } catch (error) {
      const apiError = error as ApiError;
      console.error('리뷰 삭제 실패:', apiError.error, apiError.message);
      show('후기 삭제에 실패했어요.');
    }
  };

  useEffect(() => {
    if (!reviewId) return;
    const fetchReview = async () => {
      try {
        const data = await getReviewDetail(Number(reviewId));
        setReview(data);
      } catch (error) {
        const apiError = error as ApiError;
        console.error('불러오기 실패:', apiError.message, apiError.error);
      } finally {
        setLoading(false);
      }
    };
    fetchReview();
  }, [reviewId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  //경로 직접 입력되는 경우 대비
  if (!review) {
    return <div className="flex items-center justify-center">해당 리뷰를 찾을 수 없습니다.</div>;
  }

  return (
    <>
      <div className="flex min-h-screen flex-col pb-5">
        <Header
          leftSection="BACK"
          rightSection="DETAIL"
          onDetailClick={() => openModal('action')}
          className={cn(
            'fixed top-0 z-50 h-14 w-full transition-colors duration-300',
            review.imageInfo?.length
              ? isScrolledPastImage
                ? 'bg-gray-900'
                : 'bg-gradient-to-b from-black/30 to-transparent'
              : 'bg-gray-900',
          )}
        />
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
              <span className="text-caption-3 absolute right-2 bottom-2 rounded-full bg-black/30 px-2 py-0.5 text-white">
                {`${currentIndex + 1} / ${review.imageInfo.length}`}
              </span>
            </div>
          ) : (
            <div className="h-11" />
          )}
        </div>

        <div className="w-full px-5 pt-5">
          <div className="text-title-2 text-left text-white">{review.title}</div>

          {/*유저 정보, 추후 API 연결 시 프로필 사진 받아와서 조건부로...*/}
          <div className="mt-3 flex items-center gap-2">
            <ProfileImageWithFallback
              src={review.user.profileImageUrl}
              size={32}
              className="border border-gray-500 bg-gray-950"
            />
            <span className="text-body-1 text-white">{review.user.nickname}</span>
          </div>
          {/*상단 정보*/}
          <div className="flex flex-col gap-y-2 pt-3">
            <div className="flex items-center gap-2">
              <Badge type="info" className="h-7 w-[85px] justify-center">
                관람 영화
              </Badge>
              <span className="text-caption-2 text-white">{review.movieTitle}</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge type="info" className="h-7 w-[85px] justify-center">
                상영관
              </Badge>
              <span className="text-caption-2 text-white">{review.auditoriumName}</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge type="info" className="h-7 w-[85px] justify-center">
                좌석 정보
              </Badge>
              <span className="text-caption-2 text-white">
                {review.seatInfo.map((seat) => seat.seatNumber).join(', ')}
              </span>
            </div>
          </div>

          <div className="w-full pt-5">
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
        {modalType === 'action' && !isConfirmOpen && (
          <ActionModal
            onEdit={() => console.log('수정하기 클릭')}
            onDelete={() => {
              setIsConfirmOpen(true);
              closeModal();
            }}
          />
        )}
      </div>

      {isConfirmOpen && (
        <ConfirmModal
          title="정말 삭제하시겠어요?"
          subtitle="삭제한 후에는 복구할 수 없어요."
          confirmText="삭제하기"
          cancelText="취소"
          onConfirm={() => {
            setIsConfirmOpen(false);
            handleDelete();
          }}
          onCancel={() => {
            console.log('삭제 취소');
            setIsConfirmOpen(false);
          }}
        />
      )}
    </>
  );
};

export default ReviewDetailPage;
