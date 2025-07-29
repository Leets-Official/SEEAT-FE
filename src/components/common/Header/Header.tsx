import React, { useState } from 'react';
import {ChevronIcon, HeartFilledIcon,HeartOutlineIcon,BookmarkFilledIcon,BookmarkOutlineIcon,} from '@/assets';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  onBackClick?: () => void;
}

// const Header... 대신 export const Header... 로 수정
export const Header: React.FC<HeaderProps> = ({ title, showBack = true, onBackClick }) => {
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
          {/* '좋아요' 상태일 때(liked가 true) 채워진 아이콘이 보여야 합니다. */}
          {liked ? (
            <HeartFilledIcon className="w-5 h-5 text-white" />
          ) : (
            <HeartOutlineIcon className="w-5 h-5 text-white" />
          )}
        </button>
        <button onClick={() => setBookmarked((prev) => !prev)}>
          {/* '북마크' 상태일 때(bookmarked가 true) 채워진 아이콘이 보여야 합니다. */}
          {bookmarked ? (
            <BookmarkFilledIcon className="w-5 h-5 text-white" />
          ) : (
            <BookmarkOutlineIcon className="w-5 h-5 text-white" />
          )}
        </button>
      </div>
    </div>
  );
};

// 마지막 export default 라인 삭제
// export default Header;