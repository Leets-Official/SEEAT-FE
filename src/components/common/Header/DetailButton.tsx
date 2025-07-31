import { useState } from 'react';
import {
  HeartFilledIcon,
  HeartOutlineIcon,
  BookmarkFilledIcon,
  BookmarkOutlineIcon,
  KebabIcon,
} from '@/assets';

interface DetailButtonProps {
  onKebabClick?: () => void;
}

export const DetailButton: React.FC<DetailButtonProps> = ({ onKebabClick }) => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className="flex items-center gap-4">
      <button onClick={() => setLiked((prev) => !prev)}>
        {liked ? <HeartOutlineIcon className="h-5 w-5" /> : <HeartFilledIcon className="h-5 w-5" />}
      </button>

      <button onClick={() => setBookmarked((prev) => !prev)}>
        {bookmarked ? (
          <BookmarkOutlineIcon className="h-5 w-5" />
        ) : (
          <BookmarkFilledIcon className="h-5 w-5" />
        )}
      </button>

      <button onClick={onKebabClick}>
        <KebabIcon className="h-5 w-5" />
      </button>
    </div>
  );
};
