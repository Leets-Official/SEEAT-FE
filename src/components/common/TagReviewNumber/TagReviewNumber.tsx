import React from 'react';

import {SoundIcon, CompanionIcon, EnvironmentIcon} from '@/assets';

const iconComponents = {
  sound: SoundIcon,
  environment: CompanionIcon,
  companion: EnvironmentIcon,
};

interface TagReviewNumberProps {
  iconType: keyof typeof iconComponents;
  title: string;
  count: number;
  className?: string;
}


const TagReviewNumber: React.FC<TagReviewNumberProps> = ({
  iconType,
  title,
  count,
  className,
}) => {
  const IconComponent = iconComponents[iconType];

  return (
    <div
      className={`
        flex w-[335px] h-[48px] items-center gap-3 rounded-l
        bg-gray-800/30 p-3
        ${className}
      `}
    >
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-m bg-gray-800">
        <IconComponent className="text-red-300" />
      </div>

      <p className="flex-1 truncate text-body-2 text-white">{title}</p>
      <p className="text-title-4 text-white">{count}</p>
    </div>
  );
};

export default TagReviewNumber;