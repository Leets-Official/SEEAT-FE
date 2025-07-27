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

const TextareaBasic = ({
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

        
        {showEmptyWarning && (
          <p className="text-caption-3 text-yellow-figma h-[20px]">
            내용을 입력해주세요
          </p>
        )}
      </div>
    </div>
)}

export default TextareaBasic;