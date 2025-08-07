import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchInput, Badge, BottomNavigation } from '@/components';
import api from '@/api/api';

export default function ReviewSearchPage() {
  const [search, setSearch] = useState('');
  const [recentKeywords, setRecentKeywords] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecentKeywords = async () => {
      try {
        const res = await api.get<string[]>('/api/v1/search');
        setRecentKeywords(res.data); 
      } catch (error) {
        console.error('최근 검색어 조회 실패', error);
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
    const keyword = recentKeywords[index];

    try {
      await api.delete('/api/v1/search', {
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
            {recentKeywords.map((word, index) => (
              <Badge
                key={index}
                type="removable"
                onRemove={() => handleRemove(index)}
              >
                {word}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 w-full max-w-[430px] -translate-x-1/2">
        <BottomNavigation />
      </div>
    </div>
  );
}
