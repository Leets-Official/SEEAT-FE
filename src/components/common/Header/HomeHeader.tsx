// src/components/common/Header/HomeHeader.tsx

import React from 'react';

// [수정] 로고와 설정 아이콘을 import 합니다.
import LogoIcon from '@/assets/icons/logo.svg?react';
import GearIcon from '@/assets/icons/icon_gear.svg?react';

interface HomeHeaderProps {
  onSettingsClick?: () => void;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ onSettingsClick }) => {
  return (
    <div className="flex items-center justify-between px-4 w-full h-[44px]">
      {/* 
        [수정]
        로고 자리에 import한 LogoIcon 컴포넌트를 사용합니다.
        SVG 자체에 크기(width="80", height="24")가 지정되어 있지만,
        필요 시 className으로 크기를 조절할 수 있습니다.
      */}
      <LogoIcon />

      <button onClick={onSettingsClick}>
        <GearIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default HomeHeader;