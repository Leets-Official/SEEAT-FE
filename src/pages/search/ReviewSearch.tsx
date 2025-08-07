// 파일 경로: src/pages/search/ReviewSearch.tsx

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, SearchInput, Badge, BottomNavigation } from '@/components';
import api from '@/api/api';

export default function ReviewSearch() { // 컴포넌트 이름을 파일 이름과 맞춥니다.
  const [search, setSearch] = useState('');
  const [recentKeywords, setRecentKeywords] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  // ✅ 최근 검색어 불러오기
  const fetchRecentKeywords = async () => {
    try {
      // [수정] baseURL을 사용하므로 상대 경로로 변경하고, .data로 데이터에 접근합니다.
      const response = await api.get<string[]>('/search');
      setRecentKeywords(response.data.slice(0, 6));
    } catch (err) {
      console.error('최근 검색어 조회 실패:', err);
      setRecentKeywords([]); // 오류 발생 시 빈 배열로 초기화
    }
  };

  // ✅ 검색어 삭제
  const handleRemove = async (index: number) => {
    const keyword = recentKeywords[index];
    try {
      await api.delete('/search', { data: { keyword } });
      setRecentKeywords(prev => prev.filter((_, i) => i !== index));
    } catch (err) {
      console.error('검색어 삭제 실패:', err);
    }
  };

  // ✅ 검색 및 저장
  const handleSearch = async () => {
    const trimmed = search.trim();
    if (!trimmed) {
      alert('검색어를 입력해주세요.');
      return;
    }

    try {
      await api.post('/search', { keyword: trimmed });

      setRecentKeywords(prev => {
        const filtered = prev.filter(word => word !== trimmed);
        return [trimmed, ...filtered].slice(0, 6);
      });

      navigate(`/search/result?query=${encodeURIComponent(trimmed)}`);
    } catch (err) {
      console.error('검색어 저장 실패:', err);
    }
  };

  useEffect(() => {
    fetchRecentKeywords();
  }, []);

  return (
    <div className="relative flex justify-center min-h-screen text-white">
      <div className="w-full max-w-[400px] px-4 pt-16 pb-20">
        <Header leftSection="BACK" onBackClick={handleBackClick}>
          검색
        </Header>

        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="검색어를 입력해주세요"
          onSearch={handleSearch}
        />

        <div className="mt-6">
          <h2 className="mb-2 text-title-3">최근 검색어</h2>
          {recentKeywords.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {recentKeywords.map((word, index) => (
                <Badge
                  key={`${word}-${index}`}
                  type="removable"
                  onRemove={() => handleRemove(index)}
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