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
  placeholderColorType = 'gray',
  onClickPlus,
  readOnly = false,
  className,
}: InputProps) {
  // 포커스 상태를 관리하여 동적 스타일링에 사용합니다.
  const [isFocused, setIsFocused] = useState(false);

  const placeholderColorClass =
    placeholderColorType === 'white' ? 'placeholder-white' : 'placeholder-gray-400';

  return (
    <div className={cn('flex flex-col gap-1', className)}>
      <label className="text-caption-2 h-[20px] text-gray-300">
        {label} <span className="text-red-400">*</span>
      </label>

      <div
        className={cn(
          // 공통 스타일 클래스를 통합합니다.
          'flex h-[48px] w-full items-center rounded-lg border px-3',
          // isFocused 상태에 따라 스타일을 동적으로 변경합니다.
          isFocused ? 'border-gray-400 bg-gray-800' : 'border-gray-800 bg-black',
          'bg-transparent',
        )}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          readOnly={readOnly}
          // 포커스 상태를 감지하기 위한 이벤트 핸들러를 추가합니다.
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={cn(
            'text-body-2 flex-1 placeholder:transition-all',
            placeholderColorClass,
            'focus:ring-0 focus:outline-none',
          )}
        />
        {/*
          [수정] onClickPlus 프롭스가 있을 때만 버튼을 렌더링하고,
          해당 함수를 onClick 이벤트에 연결합니다.
        */}
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

      {/* helperText나 helperSubText가 있을 때만 안내/경고 메시지를 표시합니다. */}
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
