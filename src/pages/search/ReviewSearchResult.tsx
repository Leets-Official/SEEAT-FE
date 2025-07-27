// src/pages/search/ReviewSearchResultPage.tsx
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useFilter } from '@/contexts/FilterContext';

import SearchInput from '@/components/common/SearchInput/SearchInput';
import ReviewCard from '@/components/common/ReviewCard/ReviewCard';
import FilterIcon from '@/assets/icons/filter.svg?react';
import HeaderBasic from '@/components/common/Header/HeaderBasic';

const mockSearchResults = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/200/200?random=1',
    likeCount: 24,
    tags: ['태그', '태그', '태그'],
    title: '남양주현대아울렛 스페이스원',
    description: '리뷰 내용 앞줄을 조금 보여주는걸로 어쩌구 저쩌구',
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/200/200?random=2',
    likeCount: 18,
    tags: ['핫플', '카페', '맛집'],
    title: '성수동 어느 멋진 카페',
    description: '커피가 정말 맛있고 분위기가 좋아요. 추천합니다!',
  },
  {
    id: 3,
    imageUrl: 'https://picsum.photos/200/200?random=3',
    likeCount: 55,
    tags: ['가족과함께', '쇼핑'],
    title: '스타필드 하남',
    description: '주말에 시간 보내기 좋은 곳. 맛집도 많고 쇼핑할 것도 많아요.',
  },
];

export default function ReviewSearchResultPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const { isFiltered } = useFilter();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="mx-auto w-full max-w-[400px] px-4">
        <HeaderBasic>
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="검색어를 입력해주세요"
          />
        </HeaderBasic>

        <div className="my-3 flex justify-start">
          <button
            onClick={() => navigate('/search/filter')}
            className="relative flex h-6 w-6 items-center justify-center rounded-md bg-gray-800"
          >
            <FilterIcon className="h-5 w-5 text-gray-400" />
            {isFiltered && (
              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
            )}
          </button>
        </div>

        <main className="flex flex-col gap-y-2">
          {mockSearchResults.map((result) => (
            <ReviewCard
              key={result.id}
              imageUrl={result.imageUrl}
              tags={result.tags}
              title={result.title}
              description={result.description}
              likeCount={result.likeCount}
              onClick={() => {}}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
