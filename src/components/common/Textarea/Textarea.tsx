import { cn } from '@/utils/cn';
import React, { useState } from 'react';

interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'value'> {
  title: string;
  value?: string;
  onChange?: (value: string) => void;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  focus?: boolean;
  width?: string;
  height?: string;
  showEmptyWarning?: boolean;
  showMinLengthWarning?: boolean;
  required?: boolean;
  className?: string;
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
  width = 'w-full',
  height = 'h-[120px]',
  showEmptyWarning = false,
  showMinLengthWarning = true,
  required = false,
  className,
  ...props
}: TextareaProps) => {
  const [internalValue, setInternalValue] = useState('');
  const displayValue = value !== undefined ? value : internalValue;
  const handleChange = onChange ?? onValueChange ?? setInternalValue;

  const borderClass = 'border border-gray-800 focus-within:border-gray-400';
  const backgroundClass = cn(focus ? 'bg-gray-800/30' : 'bg-transparent');

  return (
    <div className={cn(width, 'space-y-2', className)}>
      <div className="text-caption-2 text-gray-200">
        {title} {required && <span className="text-red-400">*</span>}
      </div>

      <div className={cn('rounded-m relative p-4', borderClass, backgroundClass)}>
        <textarea
          {...props}
          value={displayValue}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={(e) => handleChange(e.target.value)}
          className={cn(
            'w-full resize-none bg-transparent outline-none',
            height,
            'text-body-2 placeholder:text-gray-500',
          )}
        />

        {maxLength && (
          <div className="absolute right-4 bottom-3 text-sm text-gray-500">
            {displayValue.length}/{maxLength}
          </div>
        )}
      </div>

      <div className="mt-1 flex flex-col gap-0.5">
        {showEmptyWarning && displayValue.length === 0 ? (
          <p className="text-caption-3 text-yellow-warn h-[20px]">내용을 입력해주세요</p>
        ) : showMinLengthWarning ? (
          <p className="text-caption-3 h-[20px] text-gray-400">{minLength}자 이상 입력해주세요</p>
        ) : null}
      </div>
    </div>
  );
};

export default Textarea;
