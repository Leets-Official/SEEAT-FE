import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@/assets';
import { TagReviewNumber } from '@/components';

interface TagReview {
  iconType: 'sound' | 'environment' | 'companion';
  title: string;
  count: number;
}

interface TagCardListProps {
  tags: TagReview[];
  maxVisible?: number;
}

const TagCardList = ({ tags, maxVisible = 4 }: TagCardListProps) => {
  const [expanded, setExpanded] = useState(false);
  const visibleTags = expanded ? tags : tags.slice(0, maxVisible);
  const hasOverflow = tags.length > maxVisible;

  return (
    <div className="mt-5">
      <div className="flex flex-col gap-3">
        {visibleTags.map((tag, index) => (
          <TagReviewNumber
            key={index}
            iconType={tag.iconType}
            title={tag.title}
            count={tag.count}
          />
        ))}
      </div>
      {!expanded && hasOverflow && (
        <div className="pointer-events-none absolute -mt-16 h-17 w-full bg-gradient-to-t from-gray-900 to-transparent" />
      )}
      {hasOverflow && (
        <div className="relative z-10 mt-4 flex items-center justify-center">
          <div className="h-px flex-1 bg-gray-700" />
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="text-caption-1 flex items-center gap-1 rounded-full border border-gray-800 px-3 py-1 text-gray-700"
          >
            {expanded ? '접기' : '태그 더보기'}
            {expanded ? (
              <ChevronUpIcon className="h-4 w-4 text-gray-700" />
            ) : (
              <ChevronDownIcon className="h-4 w-4 text-gray-700" />
            )}
          </button>
          <div className="h-px flex-1 bg-gray-700" />
        </div>
      )}
    </div>
  );
};

export default TagCardList;
