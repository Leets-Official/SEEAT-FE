import type { ChangeEvent, KeyboardEvent } from 'react';
import SearchIcon from '@/assets/icons/search.svg?react';

// 부모 컴포넌트로부터 받을 props의 타입을 정의합니다.
interface SearchInputProps {
  value: string; // input에 표시될 값
  placeholder?: string; // 플레이스홀더 텍스트
  onChange: (value: string) => void; // input 값이 변경될 때 호출될 함수
  onSearch?: () => void; // 검색을 실행할 때 호출될 함수 (돋보기 클릭 또는 엔터)
  className?: string; // 추가적인 스타일링을 위한 클래스
}

export default function SearchInput({
  value,
  placeholder = '검색어를 입력해주세요',
  onChange,
  onSearch, // 부모로부터 onSearch 함수를 받아옵니다.
  className = '',
}: SearchInputProps) {
  
  /**
   * input에서 키보드를 눌렀을 때 실행되는 함수입니다.
   * 'Enter' 키가 눌렸을 경우 onSearch 함수를 호출합니다.
   */
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (onSearch && e.key === 'Enter') {
      e.preventDefault(); // form 안에서 사용될 경우 페이지 새로고침 방지
      onSearch();
    }
  };

  /**
   * 돋보기 아이콘 버튼을 클릭했을 때 실행되는 함수입니다.
   */
  const handleSearchClick = () => {
    if (onSearch) {
      onSearch();
    }
  };

  return (
    <div className={`relative w-full ${className}`}>
      <input
        type="text"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="w-full rounded-md border border-gray-800 bg-transparent py-2 pl-4 pr-10 text-white outline-none placeholder:text-gray-500"
      />

      {/* 
        아이콘을 클릭 가능한 <button>으로 감싸고,
        onClick 이벤트에 검색 실행 함수를 연결합니다.
      */}
      <button
        type="button"
        onClick={handleSearchClick}
        className="absolute right-3 top-1/2 -translate-y-1/2"
        aria-label="검색 실행" // 스크린 리더 사용자를 위한 접근성 라벨
      >
        <SearchIcon className="h-5 w-5 text-gray-700" />
      </button>
    </div>
  );
}