import { ReviewStepLayout, TagSection } from '@/components';
import { useNavigate } from 'react-router-dom';
import { useReviewStore } from '@/store';
import { useEffect, useState } from 'react';
import type { Hashtag } from '@/types/hashtag';
import { getHashtags } from '@/api/hashtag/hashtag.api';
import {
  TAG_TYPE_TITLE_MAP,
  REQUIRED_TAG_KEYS,
  type TagKey,
  type TagSectionConfig,
} from '@/constants';

export default function ReviewTagsPage() {
  const navigate = useNavigate();
  const { isInitialized, tags, toggleTag } = useReviewStore();
  const [tagSections, setTagSections] = useState<TagSectionConfig[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const canProceed = REQUIRED_TAG_KEYS.every((key) => tags[key].length > 0);

  const handleNext = () => {
    navigate('/review/form');
  };

  //초기 진입 조건 확인
  useEffect(() => {
    if (!isInitialized) {
      navigate('/review');
    }
  }, [isInitialized, navigate]);

  //해시태그 API
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const data: Hashtag[] = await getHashtags();

        const grouped = data.reduce<Record<TagKey, string[]>>(
          (acc, tag) => {
            const key = tag.hashTagType as TagKey;
            if (!acc[key]) acc[key] = [];
            acc[key].push(`#${tag.hashTagName}`);
            return acc;
          },
          {} as Record<TagKey, string[]>,
        );

        const ORDERED_KEYS: TagKey[] = ['음향', '관람환경', '동반인'];

        const parsed: TagSectionConfig[] = ORDERED_KEYS.filter((key) => grouped[key]).map(
          (key) => ({
            key,
            title: TAG_TYPE_TITLE_MAP[key],
            required: REQUIRED_TAG_KEYS.includes(key),
            options: grouped[key],
          }),
        );
        setTagSections(parsed);
      } catch (error) {
        console.error('해시태그 불러오기 실패:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTags();
  }, []);

  return (
    <ReviewStepLayout
      title="관람하신 상영관은 어땠나요?"
      description="최대 5개까지 선택할 수 있어요."
      onClickNext={handleNext}
      disabled={!canProceed}
    >
      <div className="flex flex-col overflow-y-auto pb-[88px]">
        {isLoading ? (
          <div className="text-caption-2">태그 불러오는 중</div>
        ) : (
          tagSections.map(({ key, title, required, options }) => (
            <TagSection
              key={key}
              title={title}
              options={options}
              required={required}
              selected={tags[key]}
              onChange={(value) => toggleTag(key, value)}
            />
          ))
        )}
      </div>
    </ReviewStepLayout>
  );
}
