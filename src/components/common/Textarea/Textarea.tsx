import { cn } from '@/utils/cn';
import { useState } from 'react';

interface TextareaProps {
  title: string;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  focus?: boolean;
  placeholderColorType?: 'gray' | 'white';
  value?: string;
  onChange?: (value: string) => void;
  width?: string;
  height?: string;
}

const Textarea = ({
  title,
  placeholder = '메시지를 입력해요',
  maxLength = 1000,
  minLength = 20,
  focus = false,
  placeholderColorType = 'gray',
  value,
  onChange,
  width = 'w-[335px]',
  height = 'h-[120px]',
}: TextareaProps) => {
  const [internalText, setInternalText] = useState('');
  const displayText = value !== undefined ? value : internalText;
  const setTextValue = onChange ?? setInternalText;

  const borderClass = cn('border', focus ? 'border-gray-400' : 'border-gray-800');

  const backgroundClass = cn(focus ? 'bg-[rgba(66,66,66,0.3)]' : 'bg-black');

  const placeholderClass =
    placeholderColorType === 'white' ? 'placeholder:text-white' : 'placeholder:text-gray-400';

  const showMinLengthWarning = displayText.length < minLength;
  const showEmptyWarning = displayText.length === 0;

  return (
    <div className={cn(width, 'space-y-1')}>
      <label className="text-caption-2 inline-block h-[20px] text-gray-300">
        {title} <span className="text-red-500">*</span>
      </label>

      <div className={cn('rounded-lg p-4', width, 'min-h-[120px]', borderClass, backgroundClass)}>
        <textarea
          placeholder={placeholder}
          maxLength={maxLength}
          value={displayText}
          onChange={(e) => setTextValue(e.target.value)}
          className={cn(
            'h-[120px] w-full resize-none bg-transparent',
            'text-body-2 text-white',
            height,
            placeholderClass,
            'outline-none',
          )}
        />

        <div className="mt-2 flex items-start justify-end">
          <div className="text-caption-4 text-right text-gray-400">
            {displayText.length}/{maxLength}
          </div>
        </div>
      </div>

      <div className="mt-1 flex flex-col gap-0.5">
        {showMinLengthWarning && (
          <p className="text-caption-3 h-[20px] text-gray-400">{minLength}자 이상 입력해주세요</p>
        )}
        {showEmptyWarning && (
          <p className="text-caption-3 text-yellow-figma h-[20px]">내용을 입력해주세요</p>
        )}
      </div>
    </div>
  );
};

export default Textarea;
