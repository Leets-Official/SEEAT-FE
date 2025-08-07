import { useEffect, useState, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
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
  const navigate = useNavigate();
  const { isFiltered } = useFilter();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [search, setSearch] = useState(query);
  const [results, setResults] = useState<Review[]>([]);

  // ✅ 검색 결과 불러오기 (useCallback으로 최적화)
  const fetchResults = useCallback(async () => {
    if (!query) return; // query가 없으면 요청하지 않음
    try {
      const res = await api.get<{ content: Review[] }>('/api/v1/search/reviews', {
        params: { query },
      });
      // [오류 수정 1] axios 응답 데이터는 'data' 속성에 있습니다.
      setResults(res.data.content);
    } catch (err) {
      console.error('검색 결과 조회 실패:', err);
    }
  }, [query]); // query가 변경될 때만 함수를 재생성합니다.

  useEffect(() => {
    fetchResults();
    // [오류 수정 2] 의존성 배열에 fetchResults를 추가합니다.
  }, [fetchResults]);

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
            {isFiltered && <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />}
          </button>
        </div>

        <main className="flex flex-col gap-y-2">
          {results.map((review) => (
            <ReviewCard
              key={review.reviewId}
              imageUrl={review.thumbnailUrl}
              tags={review.hashTags}
              title={review.movieTitle}
              description={review.content}
              likeCount={review.likeCount}
              onClick={() => {}}
            />
          ))}
        </main>
      </div>
    </div>
  );
}