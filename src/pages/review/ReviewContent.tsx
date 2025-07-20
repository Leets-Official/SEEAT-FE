import { useEffect } from 'react';
import { ReviewStepLayout, Textarea, ImagePreviewItem } from '@/components';
import { PlusIcon } from '@/assets';
import { useReviewStore, useModalStore } from '@/store';
import { useNavigate } from 'react-router-dom';
import { useImgUpload } from '@/hooks';

const MAX_IMAGES = 5;
const MIN_TEXT_LENGTH = 10;

export default function ReviewTextForm() {
  const { text, setText } = useReviewStore();
  const { images, addImages, removeImage } = useImgUpload(5);

  const isValid = text.trim().length >= MIN_TEXT_LENGTH;
  const { openModal } = useModalStore();
  const handleSubmit = () => {
    if (!text.trim()) return;
    openModal('confirm', {
      title: '후기를 등록하시겠어요?',
      subtitle: '등록한 후기는 마이페이지에서 확인할 수 있어요.',
      cancelText: '취소',
      confirmText: '등록하기',
      onConfirm: () => {
        console.log('후기 등록 로직');
      },
    });
  };
  const { isInitialized } = useReviewStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isInitialized) {
      navigate('/review');
    }
  }, [isInitialized, navigate]);

  return (
    <ReviewStepLayout
      title="자세한 후기를 남겨주세요"
      onClickNext={handleSubmit}
      onClickBack={() => navigate('/review/tag')}
      nextLabel="등록하기"
      disabled={!isValid}
    >
      {/* 사진 업로드 */}
      <div className="flex flex-col gap-2">
        <p className="text-caption-2 text-white">
          사진 추가하기
          <span className="text-caption-3 px-2 text-red-300">최대 5장까지 업로드할 수 있어요.</span>
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
      <div className="flex flex-col gap-1 pt-6">
        <Textarea
          title="주제"
          placeholder="머시기를 위반한 후기는 삭제될 수 있습니다~"
          minLength={10}
          maxLength={1000}
          placeholderColorType="gray"
          value={text}
          onChange={setText}
          width="w-full"
        />
      </div>
    </ReviewStepLayout>
  );
}
