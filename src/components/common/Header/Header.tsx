import React, { useState } from 'react';
import {
  ChevronIcon,
  HeartFilledIcon,
  HeartOutlineIcon,
  BookmarkFilledIcon,
  BookmarkOutlineIcon,
} from '@/assets';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  onBackClick?: () => void;
  showLike?: boolean;
  showBookmark?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBack = true,
  onBackClick,
  showLike = true,
  showBookmark = true,
}) => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className="mx-auto flex h-[44px] w-full max-w-[430px] items-center justify-between px-4">
      <div className="flex items-center gap-2">
        {showBack && (
          <button onClick={onBackClick}>
            <ChevronIcon className="h-5 w-5 text-white" />
          </button>
        )}
        <span className="text-title-3">{title}</span>
      </div>
      {(showLike || showBookmark) && (
        <div className="flex items-center gap-4">
          {showLike && (
            <button onClick={() => setLiked((prev) => !prev)}>
              {liked ? (
                <HeartFilledIcon className="h-5 w-5 text-white" />
              ) : (
                <HeartOutlineIcon className="h-5 w-5 text-white" />
              )}
            </button>
          )}

          {showBookmark && (
            <button onClick={() => setBookmarked((prev) => !prev)}>
              {bookmarked ? (
                <BookmarkFilledIcon className="h-5 w-5 text-white" />
              ) : (
                <BookmarkOutlineIcon className="h-5 w-5 text-white" />
              )}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
