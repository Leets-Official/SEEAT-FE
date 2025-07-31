import React from 'react';
import ChevronIcon from '@/assets/icons/chevron.svg?react';

/**
 * HeaderBasic 컴포넌트의 Props
 * @param {React.ReactNode} children 
 * @param {() => void} onBackClick 
 */
interface HeaderBasicProps {
  children: React.ReactNode;
  onBackClick?: () => void;
}

export default function HeaderBasic({ children, onBackClick }: HeaderBasicProps) {
  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      window.history.back();
    }
  };

  return (
    <header className="flex items-center gap-x-2 py-3">
      <button onClick={handleBackClick}>
        <ChevronIcon className="h-6 w-6" />
      </button>
      
      {children}
    </header>
  );
}