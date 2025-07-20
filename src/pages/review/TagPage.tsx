import { ReviewStepLayout, TagSection } from '@/components';
import { useNavigate } from 'react-router-dom';
import { useReviewStore } from '@/store';
import { useEffect } from 'react';
import { tagSections } from '@/constants';

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
    </ReviewStepLayout>
  );
}
