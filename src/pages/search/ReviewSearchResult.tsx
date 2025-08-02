import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useFilter } from '@/contexts/FilterContext';
import { SearchInput, ReviewCard } from '@/components';
import { FilterIcon } from '@/assets';
import { mockMyReviews } from '@/__mocks/mockReviews';

export default function ReviewSearchResultPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const { isFiltered } = useFilter();

  return (
    <div className="min-h-screen text-white">
      <div className="mx-auto w-full max-w-[400px] px-4">
        <SearchInput value={search} onChange={setSearch} placeholder="검색어를 입력해주세요" />

        <div className="my-3 flex justify-start">
          <button
            onClick={() => navigate('/search/filter')}
            className="relative flex h-6 w-6 items-center justify-center rounded-md bg-gray-800"
          >
            <FilterIcon className="h-5 w-5 text-gray-400" />
            {isFiltered && (
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />
            )}
          </button>
        </div>

        <main className="flex flex-col gap-y-2">
          {mockMyReviews.map((result) => (
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
