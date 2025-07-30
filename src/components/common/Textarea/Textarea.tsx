import { cn } from '@/utils/cn';
import React, { useState } from 'react';

<<<<<<< HEAD
interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'value'> {
=======
interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'value'> {
>>>>>>> 3ef9a58065f58eef91c9ba508522f10f20288fe1
  title: string;
  value?: string;
  onChange?: (value: string) => void;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  focus?: boolean;
  placeholderColorType?: 'gray' | 'white';
  width?: string;
  height?: string;
<<<<<<< HEAD
  showValidationMessage?: boolean; 
=======
  showValidationMessage?: boolean;
  className?: string;
>>>>>>> 3ef9a58065f58eef91c9ba508522f10f20288fe1
}

const Textarea = ({
  title,
  value,
  onChange,
  onValueChange,
  placeholder = '메시지를 입력해요',
  maxLength = 1000,
  minLength = 0,    
  focus = false,
  placeholderColorType = 'gray',
  width = 'w-full', 
  height = 'h-[120px]',
  showValidationMessage = true,
  className,
  ...props
}: TextareaProps) => {
  const [internalValue, setInternalValue] = useState('');
  const displayValue = value !== undefined ? value : internalValue;
  const handleChange = onChange ?? onValueChange ?? setInternalValue;

  const borderClass = cn('border', focus ? 'border-gray-400' : 'border-gray-800');
  const backgroundClass = cn(focus ? 'bg-[rgba(66,66,66,0.3)]' : 'bg-black');
  const placeholderClass =
    placeholderColorType === 'white' ? 'placeholder:text-white' : 'placeholder:text-gray-400';

  const showMinLengthWarning =
    showValidationMessage && minLength > 0 && displayValue.length < minLength;
  const showEmptyWarning = showValidationMessage && displayValue.length === 0;

  return (
    <div className={cn(width, 'space-y-1', className)}>
      <label className="text-caption-2 inline-block h-[20px] text-gray-300">
        {title} <span className="text-red-500">*</span>
      </label>

      <div className={cn('relative rounded-lg p-4', borderClass, backgroundClass)}>
        <textarea
          {...props}
          value={displayValue}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={(e) => handleChange(e.target.value)}
          className={cn(
            'w-full resize-none bg-transparent outline-none text-white',
            height,
            placeholderClass
          )}
        />

        {maxLength && (
          <div className="absolute bottom-3 right-4 text-sm text-gray-500">
            {displayValue.length}/{maxLength}
          </div>
        )}
      </div>

      {showValidationMessage && (
        <div className="mt-1 flex flex-col gap-0.5">
          {showMinLengthWarning && (
            <p className="text-caption-3 h-[20px] text-gray-400">{minLength}자 이상 입력해주세요</p>
          )}
          {showEmptyWarning && (
            <p className="text-caption-3 text-yellow-figma h-[20px]">내용을 입력해주세요</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Textarea;