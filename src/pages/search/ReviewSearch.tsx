import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import {SearchInput, Badge, BottomNavigation} from '@/components'
const initialKeywords = [
  '뭔가검색했겠지...', '뭐가있지', '아무거나',
  '두줄은', '채워야되니까', '일단써보기'
];

export default function ReviewSearchPage() {
  const [search, setSearch] = useState('');
  const [recentKeywords, setRecentKeywords] = useState(initialKeywords);
  const navigate = useNavigate(); 

  const handleRemove = (index: number) => {
    setRecentKeywords(prev => prev.filter((_, i) => i !== index));
  };

    const handleSearch = () => {
    if (!search.trim()) {
      alert('검색어를 입력해주세요.');
      return;
    }
    navigate(`/search/result?query=${search}`);
  };

 return (
    <div className="relative flex justify-center min-h-screen text-white ">
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


