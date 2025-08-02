import { ReviewStepLayout, TagSection } from '@/components';
import { useNavigate } from 'react-router-dom';
import { useReviewStore } from '@/store';
import { useEffect } from 'react';
import { tagSections } from '@/constants';

export default function ReviewTagsPage() {
  const { isInitialized, tags, toggleTag } = useReviewStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isInitialized) {
      navigate('/review');
    }
  }, [isInitialized, navigate]);

  const canProceed = tags.sound.length > 0 && tags.environment.length > 0;

  const handleNext = () => {
    navigate('/review/form');
  };

  return (
    <ReviewStepLayout
      title="관람하신 상영관은 어땠나요?"
      description="최대 5개까지 선택할 수 있어요."
      onClickNext={handleNext}
      disabled={!canProceed}
    >
      <div className="flex flex-col overflow-y-auto pb-[88px]">
        {tagSections.map(({ key, title, required, options }) => (
          <TagSection
            key={key}
            title={title}
            options={options}
            required={required}
            selected={tags[key]}
            onChange={(value) => toggleTag(key, value)}
          />
        ))}
      </div>
    </ReviewStepLayout>
  );
}
