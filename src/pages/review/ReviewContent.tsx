import { useState, useEffect } from 'react';
import { ReviewStepLayout, Image, Textarea } from '@/components';
import { CloseIcon, PlusIcon } from '@/assets';
import { useReviewStore, useModalStore } from '@/store';
import { useNavigate } from 'react-router-dom';

const MAX_IMAGES = 5;
const MIN_TEXT_LENGTH = 10;

export default function ReviewTextForm() {
  const [images, setImages] = useState<File[]>([]);
  const { text, setText } = useReviewStore();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const selected = Array.from(files).slice(0, MAX_IMAGES - images.length);
    setImages((prev) => [...prev, ...selected]);
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

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
        <div className="flex flex-wrap gap-3 pt-3">
          {/* 업로드 버튼 */}
          {images.length < MAX_IMAGES && (
            <label className="flex h-[84px] w-[84px] cursor-pointer items-center justify-center rounded-md border border-white text-white">
              <PlusIcon />
              <input
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          )}
          {/* 이미지 미리보기? */}
          {images.map((image, index) => (
            <div className="relative h-[84px] w-[84px] rounded-md">
              <div key={index} className="h-full w-full overflow-hidden">
                <Image
                  src={URL.createObjectURL(image)}
                  alt={`preview-${index}`}
                  className="z-10 h-full w-full"
                  aspectRatio=""
                  rounded="rounded-md"
                />
              </div>
              <button
                onClick={() => handleRemoveImage(index)}
                className="absolute -top-1.5 -right-1.5 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-red-500"
              >
                <CloseIcon className="h-2 w-2" />
              </button>
            </div>
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
