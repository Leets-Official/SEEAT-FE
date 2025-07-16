import React, { useState } from 'react';
import {ChevronIcon, HeartFilledIcon,HeartOutlineIcon,BookmarkFilledIcon,BookmarkOutlineIcon,} from '@/assets';

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
            <ChevronIcon className="w-5 h-5 text-white" />
          </button>
        )}
        <span className="text-title-3">{title}</span>
      </div>
      <div className="flex items-center gap-4">
        <button onClick={() => setLiked((prev) => !prev)}>
          {liked ? (
            <HeartOutlineIcon className="w-5 h-5 text-white" />
          ) : (
            <HeartFilledIcon className="w-5 h-5 text-white" />
          )}
        </button>
        <button onClick={() => setBookmarked((prev) => !prev)}>
          {bookmarked ? (
            <BookmarkOutlineIcon className="w-5 h-5 text-white" />
          ) : (
            <BookmarkFilledIcon className="w-5 h-5 text-white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;

