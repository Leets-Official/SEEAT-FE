import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, SearchInput, Badge, BottomNavigation } from '@/components';
import api from '@/api/api';

export default function ReviewSearchPage() {
  const [search, setSearch] = useState('');
  const [recentKeywords, setRecentKeywords] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  // ✅ 최근 검색어 불러오기 (최대 6개)
  const fetchRecentKeywords = async () => {
    try {
      const keywords = await api.get<string[]>('/api/v1/search');
      setRecentKeywords(keywords.slice(0, 6));
    } catch (err) {
      console.error('최근 검색어 조회 실패:', err);
    }
  };

  // ✅ 검색어 삭제
  const handleRemove = async (index: number) => {
    const keyword = recentKeywords[index];
    try {
      await api.delete('/api/v1/search', { data: { keyword } });
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
      // 검색어 저장
      await api.post('/api/v1/search', { keyword: trimmed });

      // 중복 제거 및 최신순 정렬
      setRecentKeywords(prev => {
        const filtered = prev.filter(word => word !== trimmed);
        return [trimmed, ...filtered].slice(0, 6);
      });

      // 결과 페이지로 이동
      navigate(`/search/result?query=${encodeURIComponent(trimmed)}`);
    } catch (err) {
      console.error('검색어 저장 실패:', err);
    }
  };

  // ✅ 컴포넌트 마운트 시 최근 검색어 불러오기
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
          {recentKeywords.length === 0 ? (
            <p className="text-sm text-gray-500">최근 검색어가 없습니다.</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {recentKeywords.map((word, index) => (
                <Badge
                  key={word}
                  type="removable"
                  onRemove={() => handleRemove(index)}
                >
                  {word}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 w-full max-w-[430px] -translate-x-1/2">
        <BottomNavigation />
      </div>
    </div>
  );
}
