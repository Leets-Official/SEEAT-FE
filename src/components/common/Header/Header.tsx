// src/components/Header/Header.tsx

/*import { cn } from '@/utils/cn';
import { HEADER_CONTAINER_BASE, NAV_BAR_AREA, NAV_BAR_BASE } from './Header.styled';
import type { HeaderProps } from './Header.types';

import SettingsIcon from '@/components/common/icons/settings.svg?react';
import HeartIcon from '@/components/common/icons/heart.svg?react';
import BookmarkIcon from '@/components/common/icons/bookmark.svg?react';
import BackIcon from '@/components/common/icons/back.svg?react';

// --- 임시 로고 컴포넌트 ---
const TempLogo = () => (
  <div className="h-6 w-24 rounded bg-white" aria-label="임시 로고"></div>
);

// 메인 헤더 컴포넌트
export default function Header({
  variant = 'main',
  title,
  leftAddon,
  rightAddon,
  className,
  ...props
}: HeaderProps) {
  let finalLeftAddon;
  let finalRightAddon;
if (variant === 'main') {
    finalLeftAddon = <TempLogo />;
    finalRightAddon = (
      <button type="button" aria-label="설정">
        {/*  */
       /* <SettingsIcon className="text-white hover:text-gray-300" />
      </button>
    );
  } else if (variant === 'sub') {
    finalLeftAddon = (
      <button type="button" aria-label="뒤로가기">
        <BackIcon />
      </button>
    );
    finalRightAddon = (
      <div className="flex items-center gap-4">
        <button type="button" aria-label="좋아요">
          <HeartIcon />
        </button>
        <button type="button" aria-label="북마크">
          <BookmarkIcon />
        </button>
      </div>
    );
  }
  
  return (
    <header className={cn(HEADER_CONTAINER_BASE, className)} {...props}>
      <nav className={cn(NAV_BAR_BASE)}>
        <div className={cn(NAV_BAR_AREA)}>{finalLeftAddon}</div>
        {variant === 'sub' && (
          <div className={cn(NAV_BAR_AREA, 'justify-center')}>
            <h1 className="text-title-2">{title}</h1>
          </div>
        )}
        <div className={cn(NAV_BAR_AREA, 'justify-end')}>{finalRightAddon}</div>
      </nav>
    </header>
  );
}*/