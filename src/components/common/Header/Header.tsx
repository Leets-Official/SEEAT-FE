import React from 'react';
import { GearIcon, KebabIcon, SEEATLogo } from '@/assets';
import { BackButton } from './BackButton';
import { DetailButton } from './DetailButton';

interface HeaderProps {
  leftSection?: 'BACK' | 'LOGO' | 'NONE';
  rightSection?: 'SETTING' | 'DETAIL' | 'KEBAB' | 'NONE';
  onBackClick?: () => void;
  onSettingsClick?: () => void;
  onDetailClick?: () => void;
  onKebabClick?: () => void;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  leftSection = 'BACK',
  rightSection = 'NONE',
  onBackClick,
  onSettingsClick,
  onDetailClick,
  onKebabClick,
  children,
}) => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 mx-auto flex h-[44px] w-full max-w-[430px] items-center justify-between bg-gray-900 px-5 py-8">
      {/* 왼쪽 섹션 + 타이틀 */}
      <div className="flex items-center gap-2">
        {leftSection === 'BACK' && <BackButton onClick={onBackClick} />}
        {leftSection === 'LOGO' && <SEEATLogo className="h-6 w-20" />}
        {leftSection === 'NONE' && <div className="w-6" />}
        {children && <span className="text-title-3">{children}</span>}
      </div>

      {/* 오른쪽 섹션 */}
      <div className="flex items-center gap-4">
        {rightSection === 'SETTING' && (
          <button onClick={onSettingsClick}>
            <GearIcon className="h-6 w-6" />
          </button>
        )}
        {rightSection === 'DETAIL' && <DetailButton onKebabClick={onDetailClick} />}
        {rightSection === 'NONE' && <div className="w-6" />}
        {rightSection === 'KEBAB' && (
          <button onClick={onKebabClick}>
            <KebabIcon className="h-6 w-6" />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
