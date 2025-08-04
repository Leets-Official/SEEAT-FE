import { useEffect } from 'react';
import {
  ReviewStepLayout,
  Textarea,
  ImagePreviewItem,
  ConfirmModal,
  InputField,
} from '@/components';
import { PlusIcon } from '@/assets';
import { useReviewStore, useModalStore } from '@/store';
import { useNavigate } from 'react-router-dom';
import { useImgUpload } from '@/hooks';
import { postReview } from '@/api/review/review';
import type { ApiError } from '@/types/api-response';

const MAX_IMAGES = 5;
const MIN_TEXT_LENGTH = 30;

export default function ReviewTextForm() {
  const {
    text,
    setText,
    reviewTitle,
    setReviewTitle,
    isInitialized,
    movieTitle,
    seats,
    rating,
    tags,
    reset,
  } = useReviewStore();
  const { images, addImages, removeImage } = useImgUpload(5);
  const { openModal, modalType, closeModal } = useModalStore();
  const navigate = useNavigate();
  const isValid = reviewTitle.trim().length > 0 && text.trim().length >= MIN_TEXT_LENGTH;

  const handleSubmit = () => {
    if (!text.trim()) return;
    openModal('confirm');
  };

  const handleConfirmSubmit = async () => {
    try {
      const hashtagIds: number[] = Object.values(tags)
        .flat()
        .map((tag) => parseInt(tag.replace('#', '')))
        .filter((id) => !isNaN(id));

      const { reviewId } = await postReview({
        seatIds: seats,
        title: reviewTitle,
        movieTitle,
        rating,
        content: text,
        hashtags: hashtagIds,
        imageUrl: [], //이미지 API 연결 후...
      });
      closeModal();
      reset();
      navigate(`review/${reviewId}`);
    } catch (error) {
      const apiError = error as ApiError;
      console.error('리뷰 등록 실패:', apiError.message, apiError.error);
    }
  };

  useEffect(() => {
    if (!isInitialized) {
      navigate('/review');
    }
  }, [isInitialized, navigate]);

  return (
    <>
      <ReviewStepLayout
        title="자세한 후기를 남겨주세요"
        onClickNext={handleSubmit}
        nextLabel="등록하기"
        disabled={!isValid}
      >
        {/* 사진 업로드 */}
        <div className="flex flex-col gap-2">
          <p className="text-caption-2 text-white">
            사진 추가하기
            <span className="text-caption-3 px-2 text-red-300">
              최대 5장까지 업로드할 수 있어요.
            </span>
          </p>
          <div className="scrollbar-hidden flex gap-3 overflow-x-auto pt-3 whitespace-nowrap">
            {/* 업로드 버튼 */}

            <label className="flex h-[84px] w-[84px] shrink-0 cursor-pointer items-center justify-center rounded-md border border-white text-white">
              <PlusIcon />
              <input
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(e) => addImages(e.target.files)}
                disabled={images.length >= MAX_IMAGES}
              />
            </label>
            {/* 이미지 미리보기? */}
            {images.map((image, index) => (
              <ImagePreviewItem key={index} image={image} index={index} onRemove={removeImage} />
            ))}
          </div>
        </div>

        {/* 텍스트 입력 */}
        <div className="flex flex-col gap-12 pt-6">
          <InputField
            label="제목"
            placeholder="후기의 제목을 적어주세요"
            value={reviewTitle}
            onChange={(value) => {
              if (value.length <= 20) setReviewTitle(value);
            }}
          />

          <Textarea
            title="후기 내용"
            required
            placeholder="관람 경험을 자유롭게 적어주세요. (예: 사운드 중심 좌석으로 돌비 효과를 제대로 느낄 수 있어서 좋았어요!)"
            minLength={30}
            value={text}
            onChange={setText}
            width="w-full"
          />
        </div>
      </ReviewStepLayout>

      {modalType === 'confirm' && (
        <ConfirmModal
          title="후기를 등록하시겠어요?"
          subtitle="등록한 후기는 마이페이지에서 확인할 수 있어요."
          cancelText="취소"
          confirmText="등록하기"
          onConfirm={() => {
            handleConfirmSubmit();
          }}
        />
      )}
    </>
  );
}
