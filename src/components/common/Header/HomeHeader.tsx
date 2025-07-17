import React from 'react';
import GearIcon from '@/assets/icons/icon_gear.svg';

interface HomeHeaderProps {
  onSettingsClick?: () => void;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ onSettingsClick }) => {
  return (
    <div className="flex items-center justify-between px-4 w-full max-w-[375px] h-[44px] mx-auto">
      {/* 로고 자리 (비어 있음) */}
      <div className="w-[60px] h-[24px]" />
      
      <button onClick={onSettingsClick}>
        <img src={GearIcon} alt="Settings" className="w-5 h-5" />
      </button>
    </div>
  );
};

export default HomeHeader;
