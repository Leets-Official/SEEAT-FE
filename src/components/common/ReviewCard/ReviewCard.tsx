import { cn } from '@/utils/cn';
import { HeartOn, StarSmall, BarIcon } from '@/assets';
import { Badge, ThumbnailFallback } from '@/components';
import type { ReviewCardProps } from './ReviewCard.types';

export default function ReviewCard(props: ReviewCardProps) {
  const { imageUrl, tags, title, likeCount, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={cn(
        'flex h-[90px] w-full items-center gap-3 rounded-[12px] p-1 transition-colors',
        'bg-gray-900 hover:bg-gray-800 active:bg-gray-950',
        'cursor-pointer',
      )}
    >
      {/*썸네일*/}
      <div className="relative h-[82px] w-[82px] shrink-0">
        <ThumbnailFallback src={imageUrl} size={82} />
        <div className="text-caption-3 absolute right-1 bottom-1 flex items-center gap-1 rounded-full border border-gray-500 bg-[rgba(66,66,66,0.3)] pr-[6px] pl-1 text-white">
          <span>
            <HeartOn className="h-4 w-4" />
          </span>
          <span>{likeCount}</span>
        </div>
      </div>

      {/*텍스트*/}
      <div className="flex flex-col overflow-hidden">
        {/*태그*/}
        <div className="flex gap-[10px] pb-1">
          {tags.slice(0, 2).map((tag, i) => (
            <Badge key={i} type="tag" size="sm">
              {tag}
            </Badge>
          ))}
        </div>

        {/*제목*/}
        <div className="text-title-4 truncate">{title}</div>

        {'description' in props ? (
          <div className="text-caption-3 truncate text-gray-500">{props.description}</div>
        ) : (
          <div className="text-caption-2 flex items-center gap-2 pt-1 text-gray-500">
            <span>{props.date}</span>
            <BarIcon className="h-3" />
            <span className="flex items-center gap-1">
              <StarSmall className="h-4 w-4 text-red-300" />
              {props.rating.toFixed(1)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
