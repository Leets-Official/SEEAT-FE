import { cn } from '@/utils/cn';
import { useState } from 'react';
import { PlusIcon } from '@/assets';

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  helperText?: string;
  helperSubText?: string;
  focus?: boolean;
  showBackground?: boolean;
  placeholderColorType?: 'gray' | 'white';
}

export default function InputField({
  label,
  value,
  onChange,
  placeholder = '메시지를 입력하세요',
  helperText,
  helperSubText,
  focus = false,
  showBackground = false,
  placeholderColorType = 'gray',
}: InputProps) {
  const [showDotWarning, setShowDotWarning] = useState(false);

  const handleCheck = () => {
    if (!value.includes('.')) {
      setShowDotWarning(true);
    } else {
      setShowDotWarning(false);
    }
  };

  const placeholderColorClass =
    placeholderColorType === 'white' ? 'placeholder-white' : 'placeholder-gray-400';

  return (
    <div className="flex w-[335px] flex-col gap-1">
      <label className="text-caption-2 h-[20px] text-gray-300">
        {label} <span className="text-red-500">*</span>
      </label>

      <div
        className={cn(
          'flex h-[48px] w-[335px] items-center rounded-lg border px-3',
          focus ? 'border-gray-400 bg-gray-800' : 'border-gray-800 bg-black',
          showBackground && 'bg-gray-800/30',
        )}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cn(
            'text-body-2 flex-1 bg-transparent text-white',
            placeholderColorClass,
            'focus:ring-0 focus:outline-none',
          )}
        />
        <button type="button" onClick={handleCheck} className="ml-2 text-white focus:outline-none">
          <PlusIcon className="h-5 w-5" />
        </button>
      </div>

      {/* text-yellow-warn를 text-gray-400으로 변경해서 써도 됩니당! */}
      {(helperText || helperSubText || showDotWarning) && (
        <div className="mt-1 flex flex-col gap-0.5">
          {helperText && (
            <p className="text-caption-2 h-[20px] w-[335px] text-gray-400">{helperText}</p>
          )}
          {helperSubText && (
            <p className="text-caption-3 text-yellow-warn h-[20px] w-[335px]">{helperSubText}</p>
          )}
          {showDotWarning && (
            <p className="text-caption-3 text-yellow-warn h-[20px] w-[335px]">
              메시지에 마침표를 입력해요.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
