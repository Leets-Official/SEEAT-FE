import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchInput, Badge, BottomNavigation } from '@/components';
import api from '@/api/api';

type Keyword = {
  content: string;
};

export default function ReviewSearchPage() {
  const [search, setSearch] = useState('');
  const [recentKeywords, setRecentKeywords] = useState<Keyword[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecentKeywords = async () => {
      try {
        const res = await api.get('/search');

        if (res.data?.success && Array.isArray(res.data.data)) {
          setRecentKeywords(res.data.data);
        } else {
          console.warn('유효하지 않은 검색어 응답:', res.data);
          setRecentKeywords([]);
        }
      } catch (error) {
        console.error('최근 검색어 조회 실패', error);
        setRecentKeywords([]);
      }
    };

    fetchRecentKeywords();
  }, []);

  const handleSearch = () => {
    if (!search.trim()) {
      alert('검색어를 입력해주세요.');
      return;
    }

    navigate(`/search/result?query=${encodeURIComponent(search)}`);
  };

  const handleRemove = async (index: number) => {
    const keyword = recentKeywords[index].content;

    try {
      await api.delete('/search', {
        params: { keyword },
      });
      setRecentKeywords((prev) => prev.filter((_, i) => i !== index));
    } catch (error) {
      console.error('검색어 삭제 실패', error);
    }
  };

  return (
    <div className="relative flex justify-center min-h-screen text-white">
      <div className="w-full max-w-[400px] px-4 pt-4 pb-20">
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="검색어를 입력해주세요"
          onSearch={handleSearch}
        />

        <div className="mt-6">
          <h2 className="mb-2 text-title-3">최근 검색어</h2>
          <div className="flex flex-wrap gap-2">
            {recentKeywords.length > 0 ? (
              recentKeywords.map((wordObj, index) => (
                <Badge
                  key={index}
                  type="removable"
                  onRemove={() => handleRemove(index)}
                >
                  {wordObj.content}
                </Badge>
              ))
            ) : (
              <p className="text-body-3 text-gray-400">최근 검색어가 없습니다.</p>
            )}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 w-full max-w-[430px] -translate-x-1/2">
        <BottomNavigation />
      </div>
    </div>
  );
}
