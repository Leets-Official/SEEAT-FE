// src/components/common/Header/Header.tsx
import React, { useState } from 'react';

import ChevronIcon from '@/assets/icons/chervon.svg';
import HeartFilledIcon from '@/assets/icons/heart_f.svg';
import HeartOutlineIcon from '@/assets/icons/heart_o.svg';
import BookmarkFilledIcon from '@/assets/icons/bookmark_f.svg';
import BookmarkOutlineIcon from '@/assets/icons/bookmark_o.svg';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  onBackClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, showBack = true, onBackClick }) => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className="flex items-center justify-between px-4 w-full max-w-[375px] h-[44px] mx-auto">
      <div className="flex items-center gap-2">
        {showBack && (
          <button onClick={onBackClick}>
            <img src={ChevronIcon} alt="Back" className="w-5 h-5" />
          </button>
        )}
        <span className="text-title-3">{title}</span>
      </div>
      <div className="flex items-center gap-4">
        <button onClick={() => setLiked(prev => !prev)}>
          <img
            src={liked ? HeartOutlineIcon : HeartFilledIcon}
            alt="Heart"
            className="w-5 h-5"
          />
        </button>
        <button onClick={() => setBookmarked(prev => !prev)}>
          <img
            src={bookmarked ? BookmarkOutlineIcon : BookmarkFilledIcon}
            alt="Bookmark"
            className="w-5 h-5"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
