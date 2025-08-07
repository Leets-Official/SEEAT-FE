import { useEffect, useState } from 'react';
// useNavigate 훅을 import 합니다.
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useFilter } from '@/contexts/FilterContext';
import { SearchInput, ReviewCard } from '@/components';
// ChevronIcon을 import 합니다.
import { FilterIcon, ChevronIcon } from '@/assets';
import api from '@/api/api';

interface Review {
  reviewId: number;
  content: string;
  rating: number;
  movieTitle: string;
  thumbnailUrl:string;
  likeCount: number;
  likedByUser: boolean;
  hashTags: string[];
}

export default function ReviewSearchResultPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('query') ?? '');
  const { isFiltered } = useFilter();
  const [results, setResults] = useState<Review[]>([]);
  
  // useNavigate 훅을 초기화합니다.
  const navigate = useNavigate();

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

        setResults(res.data);
      } catch (error) {
        console.error('검색 결과 조회 실패', error);
      }
    };

    fetchResults();
  }, [searchParams]);

  // 뒤로가기 버튼 클릭 핸들러
  const handleGoBack = () => {
    // navigate(-1)은 브라우저의 "뒤로 가기"와 동일하게 동작합니다.
    navigate(-1); 
  };

  return (
    <div className="min-h-screen text-white">
      <div className="mx-auto w-full max-w-[400px] px-4">
        <div className="flex items-center gap-x-2 py-2"> 
          <button onClick={handleGoBack}>
            <ChevronIcon className="h-6 w-6 text-white" />
          </button>
          
          <div className="flex-1 mt-2">
            <SearchInput
              value={search}
              onChange={setSearch}
              placeholder="검색어를 입력해주세요"
              onSearch={() => setSearchParams({ query: search })}
            />
          </div>
        </div>

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