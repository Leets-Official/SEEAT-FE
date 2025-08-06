import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@/assets';

const SORT_OPTIONS = [
  { label: '좋아요 순', value: 'likes' },
  { label: '최신순', value: 'latest' },
  { label: '별점 높은 순', value: 'ratingDesc' },
  { label: '별점 낮은 순', value: 'ratingAsc' },
];

interface SortDropdownProps {
  selected: string;
  onChange: (value: string) => void;
}

const SortDropdown = ({ selected, onChange }: SortDropdownProps) => {
  const [open, setOpen] = useState(false);

  const selectedLabel = SORT_OPTIONS.find((opt) => opt.value === selected)?.label ?? '최신순';

  return (
    <div className="text-caption-3 relative text-gray-500">
      <button onClick={() => setOpen((prev) => !prev)} className="flex items-center gap-1">
        {selectedLabel}
        {open ? <ChevronUpIcon className="h-4 w-4" /> : <ChevronDownIcon className="h-4 w-4" />}
      </button>

      {open && (
        <div className="absolute right-0 z-10 mt-1 w-20 rounded-lg border border-gray-700 bg-gray-950 py-2">
          {SORT_OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className="text-caption-3 w-full cursor-pointer px-[10px] py-[6px] text-left"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
