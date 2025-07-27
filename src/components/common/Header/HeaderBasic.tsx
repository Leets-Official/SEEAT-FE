import React from 'react';
import ChevronIcon from '@/assets/icons/chevron.svg?react';

/**
 * HeaderBasic 컴포넌트의 Props
 * @param {React.ReactNode} children - 헤더 중앙에 표시될 요소 (텍스트, 컴포넌트 등)
 * @param {() => void} onBackClick - 뒤로가기 아이콘 클릭 시 실행될 함수
 */
interface HeaderBasicProps {
  children: React.ReactNode;
  onBackClick?: () => void;
}

export default function HeaderBasic({ children, onBackClick }: HeaderBasicProps) {
  // 뒤로가기 버튼 클릭 핸들러 (함수가 없으면 기본 동작)
  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      // 기본적으로는 window.history.back()을 호출할 수 있습니다.
      window.history.back();
    }
  };

  return (
    <header className="flex items-center gap-x-2 py-3">
      <button onClick={handleBackClick}>
        <ChevronIcon className="h-6 w-6" />
      </button>
      
      {/* 이 부분에 텍스트나 다른 컴포넌트가 들어옵니다. */}
      {children}
    </header>
  );
}