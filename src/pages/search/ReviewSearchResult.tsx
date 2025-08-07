// 파일 경로: src/pages/search/ReviewSearchResult.tsx

import { useEffect, useState, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useFilter } from '@/contexts/FilterContext';
import { SearchInput, ReviewCard, Header } from '@/components'; // Header 추가
import { FilterIcon } from '@/assets';
import api from '@/api/api';

// 서버로부터 받는 리뷰 데이터의 타입을 명확하게 정의합니다.
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

// 서버 응답 전체의 타입을 정의합니다.
interface SearchResponse {
  content: Review[];
  // pageable, totalPages 등 페이지네이션 정보가 있다면 여기에 추가
}

/**
 * 검색어에 대한 리뷰 검색 결과를 보여주는 페이지
 */
export default function ReviewSearchResult() { // 컴포넌트 이름 변경
  const navigate = useNavigate();
  const { isFiltered } = useFilter();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryFromUrl = searchParams.get('query') || '';

  const [search, setSearch] = useState(queryFromUrl); // input의 상태
  const [results, setResults] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 검색 결과를 불러오는 함수 (useCallback으로 불필요한 재생성 방지)
  const fetchResults = useCallback(async (currentQuery: string) => {
    if (!currentQuery) {
      setResults([]);
      setLoading(false);
      return;
    }
    
    setLoading(true);
    setError(null);

    try {
      // params로 쿼리를 전달합니다.
      const res = await api.get<SearchResponse>('/api/v1/search/reviews', {
        params: { query: currentQuery },
      });
      setResults(res.data.content);
    } catch (err) {
      console.error('검색 결과 조회 실패:', err);
      setError('검색 결과를 불러오는 데 실패했습니다.');
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // URL의 쿼리 파라미터가 변경될 때마다 검색 결과를 다시 불러옵니다.
  useEffect(() => {
    fetchResults(queryFromUrl);
  }, [queryFromUrl, fetchResults]);

  // 이 페이지에서 다시 검색을 실행하는 함수
  const handleSearch = () => {
    const trimmedSearch = search.trim();
    if (!trimmedSearch) {
      alert('검색어를 입력해주세요.');
      return;
    }
    // URL의 쿼리 파라미터를 업데이트하여 페이지를 리렌더링하고 useEffect를 트리거합니다.
    setSearchParams({ query: trimmedSearch });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto w-full max-w-[400px] px-4 pb-10">
        <Header leftSection="BACK" onBackClick={() => navigate(-1)}>
          검색 결과
        </Header>
        
        <div className="mt-4">
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="검색어를 다시 입력해주세요"
            onSearch={handleSearch} // ✅ 에러 해결: onSearch prop 추가
          />
        </div>

        <div className="my-4 flex justify-between items-center">
          <p className="text-sm text-gray-400">
            총 <span className="text-white font-semibold">{results.length}</span>개의 결과
          </p>
          <button
            onClick={() => navigate('/search/filter')}
            className="relative flex items-center gap-x-1 rounded-md bg-gray-800 px-2 py-1 text-sm"
          >
            <FilterIcon className="h-4 w-4 text-gray-400" />
            <span>필터</span>
            {isFiltered && <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />}
          </button>
        </div>

        <main className="flex flex-col gap-y-3">
          {loading ? (
            <p className="text-center text-gray-400">검색 중...</p>
          ) : error ? (
            <p className="text-center text-red-400">{error}</p>
          ) : results.length > 0 ? (
            results.map((review) => (
              <ReviewCard
                key={review.reviewId}
                imageUrl={review.thumbnailUrl}
                tags={review.hashTags}
                title={review.movieTitle}
                description={review.content}
                likeCount={review.likeCount}
                onClick={() => navigate(`/review/${review.reviewId}`)} // 리뷰 상세 페이지로 이동
              />
            ))
          ) : (
            <p className="text-center text-gray-400">검색 결과가 없습니다.</p>
          )}
        </main>
      </div>
    </div>
  );
}