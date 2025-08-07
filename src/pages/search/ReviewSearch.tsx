// 파일 경로: src/pages/search/ReviewSearch.tsx

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, SearchInput, Badge, BottomNavigation } from '@/components';
import api from '@/api/api';

/**
 * 최근 검색어 목록을 보여주고, 새로운 검색을 시작하는 페이지
 */
export default function ReviewSearch() {
  const [search, setSearch] = useState('');
  const [recentKeywords, setRecentKeywords] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  // 최근 검색어 목록을 서버에서 불러오는 함수
  const fetchRecentKeywords = async () => {
    try {
      // API 명세에 맞는 정확한 엔드포인트로 수정해야 합니다. (예시: /api/v1/search/recent)
      const response = await api.get<string[]>('/api/v1/search/recent');
      // 최대 6개의 검색어만 보여줍니다.
      setRecentKeywords(response.data.slice(0, 6));
    } catch (err) {
      console.error('최근 검색어 조회 실패:', err);
      setRecentKeywords([]); // 오류 발생 시 안전하게 빈 배열로 설정
    }
  };

  // 컴포넌트 마운트 시 최근 검색어를 불러옵니다.
  useEffect(() => {
    fetchRecentKeywords();
  }, []);

  // 특정 최근 검색어를 삭제하는 함수
  const handleRemove = async (keywordToRemove: string) => {
    try {
      // API 명세에 맞게 DELETE 요청을 보냅니다.
      await api.delete('/api/v1/search/recent', { data: { keyword: keywordToRemove } });
      // 상태에서도 해당 검색어를 제거합니다.
      setRecentKeywords(prev => prev.filter(keyword => keyword !== keywordToRemove));
    } catch (err) {
      console.error('검색어 삭제 실패:', err);
    }
  };

  // 검색을 실행하는 함수 (SearchInput의 onSearch prop으로 전달)
  const handleSearch = async () => {
    const trimmedSearch = search.trim();

    // 검색어가 비어있거나 공백만 있으면 경고하고 함수를 종료합니다.
    if (!trimmedSearch) {
      alert('검색어를 입력해주세요.');
      return;
    }

    try {
      // 서버에 검색어를 저장하는 API를 호출합니다 (필요하다면).
      // await api.post('/api/v1/search/recent', { keyword: trimmedSearch });
      
      // 검색 결과 페이지로 이동합니다. 쿼리 파라미터로 검색어를 넘겨줍니다.
      navigate(`/search/result?query=${encodeURIComponent(trimmedSearch)}`);
    } catch (err) {
      console.error('검색 실행 중 오류:', err);
      // 필요하다면 사용자에게 오류 발생을 알릴 수 있습니다.
      alert('검색 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="relative flex justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-[400px] px-4 pt-16 pb-20">
        <Header leftSection="BACK" onBackClick={handleBackClick}>
          검색
        </Header>

        <div className="mt-4">
          <SearchInput
            value={search}
            onChange={setSearch} // input 값이 변경될 때마다 search 상태 업데이트
            placeholder="영화, 배우, 태그 검색"
            onSearch={handleSearch} // Enter 또는 돋보기 클릭 시 handleSearch 실행
          />
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-title-3 font-bold">최근 검색어</h2>
          {recentKeywords.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {recentKeywords.map((word, index) => (
                <Badge
                  key={`${word}-${index}`}
                  type="removable"
                  onRemove={() => handleRemove(word)}
                >
                  {word}
                </Badge>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">최근 검색어가 없습니다.</p>
          )}
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 w-full max-w-[430px] -translate-x-1/2">
        <BottomNavigation />
      </div>
    </div>
  );
}