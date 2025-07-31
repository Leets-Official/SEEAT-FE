// src/components/common/Header/HomeHeader.tsx

import React from 'react';
import { HeaderLogo, GearIcon } from '@/assets';

interface HomeHeaderProps {
  onSettingsClick?: () => void;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ onSettingsClick }) => {
  return (
    <div className="mx-auto flex h-[44px] w-full max-w-[430px] items-center justify-between px-5">
      {/* 로고 자리 (비어 있음) */}
      <HeaderLogo className="h-6 w-20" />

      <button onClick={onSettingsClick}>
        <GearIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default HomeHeader;
