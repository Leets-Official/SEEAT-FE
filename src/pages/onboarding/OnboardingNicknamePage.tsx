import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Header, ImagePreviewItem } from '@/components';
import Input from '@/components/common/Input/Input';
import ProgressBar from '@/components/common/ProgressBar/ProgressBar';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { GalleryProfileIcon } from '@/assets';
import { useImgUpload } from '@/hooks';
import { useS3UploadFlow } from '@/hooks/useS3UploadFlow';

const OnboardingNicknamePage = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const setNickname = useOnboardingStore((state) => state.setNickname);

  const { addImages, previewUrls, selectedFiles } = useImgUpload(1);
  const setProfileImageFileName = useOnboardingStore((state) => state.setProfileImageFilename);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClickGallery = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    addImages(e.target.files);

    if (files && files.length > 0) {
      const file = files[0];
      setProfileImageFileName(file.name);
      console.log('저장된 이미지 파일: ', file.name);
    }
  };

  const handleNext = async () => {
    setNickname(input);
    console.log('닉네임: ', input);
    if (selectedFiles.length > 0) {
      try {
        const result = await useS3UploadFlow(selectedFiles);
        const imageUrl = result[0]?.url;

        if (imageUrl) {
          setProfileImageFileName(imageUrl);
          console.log('프로필 이미지 URL:', imageUrl);
          navigate('/onboarding/genre');
        } else {
          console.error('이미지 업로드 실패');
        }
      } catch (e) {
        console.error('이미지 업로드 중 에러 발생', e);
      }
    }
  };

  return (
    <div className="relative mx-auto min-h-screen w-full pb-32">
      {/* 상단 헤더 */}
      <Header
        leftSection="BACK"
        onBackClick={() => navigate('/login')}
        className="bg-gray-900 pt-4"
      />
      {/* 진행도 바 */}
      <div className="pt-[34px]">
        <ProgressBar currentStep={1} totalSteps={3} />

        {/* 콘텐츠 영역 */}
        <div className="mt-2 px-6">
          {/* 타이틀 */}
          <h1 className="text-title-2 mb-10">프로필을 만들어주세요</h1>

          <div className="mb-10 flex justify-center">
            {/* 파일 input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleChangeFile}
            />

            {previewUrls.length === 0 ? (
              <div onClick={handleClickGallery}>
                <GalleryProfileIcon className="cursor-pointer" />
              </div>
            ) : (
              <ImagePreviewItem
                previewUrl={previewUrls[0]}
                index={0}
                rounded="full"
                size={100}
                onClick={handleClickGallery}
              />
            )}
          </div>

          {/* 닉네임 입력 */}
          <div className="mb-2">
            <Input
              required={false}
              value={input}
              onChange={setInput}
              placeholder="닉네임을 입력해주세요"
            />
          </div>

          <p className="text-caption-3 ml-1 text-gray-500">10자 이내로 작성해주세요.</p>
        </div>

        {/* 하단 버튼 */}
        <div className="fixed bottom-8 left-1/2 w-full max-w-[430px] -translate-x-1/2 px-6">
          <Button
            onClick={handleNext}
            disabled={!input.trim()}
            variant="primary"
            color="red"
            size="lg"
            fontType="title-3"
            className="w-full"
          >
            다음
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingNicknamePage;
