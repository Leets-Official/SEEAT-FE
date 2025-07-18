import { ReviewStepLayout, TagSection } from '@/components';
import { useNavigate } from 'react-router-dom';
import { useReviewStore } from '@/store';
import { useEffect } from 'react';

export default function ReviewTagsPage() {
  const { isInitialized } = useReviewStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isInitialized) {
      navigate('/review');
    }
  }, [isInitialized, navigate]);

  const { tags, toggleTag } = useReviewStore();

  const canProceed = tags.sound.length > 0 && tags.environment.length > 0;

  const handleNext = () => {
    navigate('/review/form');
  };

  return (
    <ReviewStepLayout
      title="상영관의 어떤 점이 좋았나요?"
      onClickBack={() => navigate('/review/rating')}
      onClickNext={handleNext}
      disabled={!canProceed}
    >
      <TagSection
        title="음향"
        required
        options={['좋아요', '아무튼좋아요', '이런게좋아요', '어쩌구저쩌구', '좋다고요', '저쩌구']}
        selected={tags.sound}
        onChange={(value) => toggleTag('sound', value)}
      />
      <TagSection
        title="관람 환경"
        required
        options={['좋아요', '아무튼좋아요', '이런게좋아요', '어쩌구저쩌구', '좋다고요', '저쩌구']}
        selected={tags.environment}
        onChange={(value) => toggleTag('environment', value)}
      />
      <TagSection
        title="동반인"
        options={['혼자', '친구', '연인', '형제자매', '부모님', '아무튼...']}
        selected={tags.companion}
        onChange={(value) => toggleTag('companion', value)}
      />
    </ReviewStepLayout>
  );
}
