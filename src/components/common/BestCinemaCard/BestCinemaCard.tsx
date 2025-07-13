import { cn } from '@/utils/cn';

interface BestCinemaCardProps {
  imageUrl: string;
  rank: number;
  title: string;
  reviewCount: number;
  onClick?: () => void;
}

export default function BestCinemaCard({
  imageUrl,
  rank,
  title,
  reviewCount,
  onClick,
}: BestCinemaCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'flex w-[172px] flex-col overflow-hidden rounded-[12px] p-1 transition-colors',
        'bg-gray-900 hover:bg-[#424242] active:bg-gray-950',
        'cursor-pointer',
      )}
    >
      {/*썸네일*/}
      <div className="relative h-[92px] w-full overflow-hidden rounded-lg bg-gray-600">
        <img src={imageUrl} alt={title} className="object cover h-full w-full" />
        <div className="text-caption-1 absolute top-2 left-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white">
          {rank}
        </div>
      </div>

      {/*텍스트*/}
      <div className="min mt-[8px] flex flex-col">
        <div className="text-caption-1 truncate">{title}</div>
        <div className="flex items-center gap-[4px]">
          <span className="text-caption-3 text-gray-500">후기</span>
          <span className="text-caption-1 text-red-300">{reviewCount}</span>
        </div>
      </div>
    </div>
  );
}
