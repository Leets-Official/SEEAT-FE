import { cn } from '@/utils/cn';
import { useState } from 'react';


interface TextareaProps {
  title: string;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  focus?: boolean;
  placeholderColorType?: 'gray' | 'white';
}

const Textarea = ({
  title,
  placeholder = '메시지를 입력해요',
  maxLength = 1000,
  minLength = 20,
  focus = false,
  placeholderColorType = 'gray',
}: TextareaProps) => {
  const [text, setText] = useState('');

  const borderClass = cn(
    'border',
    focus ? 'border-gray-400' : 'border-gray-800'
  );

  const backgroundClass = cn(
    focus ? 'bg-[rgba(66,66,66,0.3)]' : 'bg-black'
  );

  const placeholderClass =
    placeholderColorType === 'white' ? 'placeholder:text-white' : 'placeholder:text-gray-400';

  const showMinLengthWarning = text.length < minLength;
  const showEmptyWarning = text.length === 0;

  return (
    <div className="w-[335px] space-y-1">
      <label className="text-caption-2 text-gray-300 h-[20px] inline-block">
        {title} <span className="text-red-500">*</span>
      </label>

      <div className={cn('w-[335px] min-h-[120px] p-4 rounded-lg', borderClass, backgroundClass)}>
        <textarea
          placeholder={placeholder}
          maxLength={maxLength}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={cn(
            'w-full h-[120px] resize-none bg-transparent',
            'text-body-2 text-white', 
            placeholderClass,        
            'outline-none'
          )}
        />

        <div className="mt-2 flex justify-end items-start">
          <div className="text-caption-4 text-gray-400 text-right">
            {text.length}/{maxLength}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-0.5 mt-1">
        {showMinLengthWarning && (
          <p className="text-caption-3 text-gray-400 h-[20px]">
            {minLength}자 이상 입력해주세요
          </p>
        )}
        {showEmptyWarning && (
          <p className="text-caption-3 text-yellow-figma h-[20px]">
            내용을 입력해주세요
          </p>
        )}
      </div>
    </div>
  );
};

export default Textarea;
