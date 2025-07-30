import { useState } from 'react';
import { PlusIcon } from '@/assets';
import { cn } from '@/utils/cn';

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  helperText?: string;
  helperSubText?: string;
  showBackground?: boolean;
  placeholderColorType?: 'gray' | 'white';
  onClickPlus?: () => void;
  readOnly?: boolean;
  className?: string;
}

export default function InputField({
  label,
  value,
  onChange,
  placeholder = '메시지를 입력하세요',
  helperText,
  helperSubText,
  showBackground = false,
  placeholderColorType = 'gray',
  onClickPlus,
  readOnly = false,
  className,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const placeholderColorClass =
    placeholderColorType === 'white' ? 'placeholder-white' : 'placeholder-gray-400';

  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <label className="text-caption-2 h-[20px] text-gray-300">
        {label} <span className="text-red-500">*</span>
      </label>

      <div
        className={cn(
          'flex h-[48px] w-[335px] items-center rounded-lg border px-3',
          isFocused ? 'border-gray-400 bg-gray-800' : 'border-gray-800 bg-black',
          showBackground && 'bg-gray-800/30',
        )}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          readOnly={readOnly}
          className={cn(
            'text-body-2 flex-1 bg-transparent text-white placeholder:transition-all',
            placeholderColorClass,
            'focus:ring-0 focus:outline-none',
          )}
        />
        {onClickPlus && (
          <button
            type="button"
            onClick={onClickPlus}
            className="ml-2 text-white focus:outline-none"
          >
            <PlusIcon className="h-5 w-5" />
          </button>
        )}
      </div>

      {(helperText || helperSubText) && (
        <div className="mt-1 flex flex-col gap-0.5">
          {helperText && (
            <p className="text-caption-2 h-[20px] w-[335px] text-gray-400">{helperText}</p>
          )}
          {helperSubText && (
            <p className="text-caption-3 text-yellow-warn h-[20px] w-[335px]">{helperSubText}</p>
          )}
        </div>
      )}
    </div>
  );
}