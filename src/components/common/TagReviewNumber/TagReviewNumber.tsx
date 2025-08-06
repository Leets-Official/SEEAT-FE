import React from 'react';

import { SoundIcon, CompanionIcon, EnvironmentIcon } from '@/assets';

const iconComponents = {
  음향: SoundIcon,
  동반인: CompanionIcon,
  관람환경: EnvironmentIcon,
} as const;

interface TagReviewNumberProps {
  iconType: keyof typeof iconComponents;
  title: string;
  count: number;
  className?: string;
}

const TagReviewNumber: React.FC<TagReviewNumberProps> = ({ iconType, title, count, className }) => {
  const IconComponent = iconComponents[iconType];

  return (
    <div
      className={`flex h-[48px] w-full items-center gap-3 rounded-l bg-gray-800/30 p-3 ${className} `}
    >
      <div className="rounded-m flex h-8 w-8 flex-shrink-0 items-center justify-center bg-gray-800">
        <IconComponent className="text-red-300" />
      </div>

      <p className="text-body-2 flex-1 truncate text-white">{title}</p>
      <p className="text-title-4 text-white">{count}</p>
    </div>
  );
};

export default TagReviewNumber;
