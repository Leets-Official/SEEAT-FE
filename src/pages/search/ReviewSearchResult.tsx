import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFilter } from '@/contexts/FilterContext';
import { SearchInput, ReviewCard } from '@/components';
import { FilterIcon } from '@/assets';
import api from '@/api/api';

interface Review {
  reviewId: number;
  content: string;
  rating: number;
  movieTitle: string;
  thumbnailUrl: string;
  likeCount: number;
  likedByUser: boolean;
  hashTags: string[];
}

export default function ReviewSearchResultPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('query') ?? '');
  const { isFiltered } = useFilter();
  const [results, setResults] = useState<Review[]>([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const keyword = searchParams.get('query') || '';
        const sort = searchParams.get('sort') || 'POPULAR';
        const auditoriumId = searchParams.get('auditoriumId');

        const res = await api.get<Review[]>('/search/reviews', {
          params: {
            keyword,
            sort,
            ...(auditoriumId ? { auditoriumId } : {}),
          },
        });

        setResults(res.data); // ✅ res는 Review[] 바로 반환됨
      } catch (error) {
        console.error('검색 결과 조회 실패', error);
      }
    };

    fetchResults();
  }, [searchParams]);

  return (
    <div className="min-h-screen text-white">
      <div className="mx-auto w-full max-w-[400px] px-4">
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="검색어를 입력해주세요"
          onSearch={() => setSearchParams({ query: search })}
        />

        <div className="my-3 flex justify-start">
          <button
            onClick={() => window.history.back()}
            className="relative flex h-6 w-6 items-center justify-center rounded-md bg-gray-800"
          >
            <FilterIcon className="h-5 w-5 text-gray-400" />
            {isFiltered && (
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />
            )}
          </button>
        </div>

        <main className="flex flex-col gap-y-2">
          {results.length > 0 ? (
            results.map((result) => (
              <ReviewCard
                key={result.reviewId}
                imageUrl={result.thumbnailUrl}
                tags={result.hashTags}
                title={result.movieTitle}
                description={result.content}
                likeCount={result.likeCount}
                onClick={() => {}}
              />
            ))
          ) : (
            <p className="text-center text-gray-400 mt-12">검색 결과가 없습니다.</p>
          )}
        </main>
      </div>
    </div>
  );
}
