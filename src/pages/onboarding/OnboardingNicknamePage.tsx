import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOnboardingStore } from '@/store/useOnboardingStore';

const OnboardingNicknamePage = () => {
  const [nickname, setNickname] = useState('');
  const { setNickname: saveNickname } = useOnboardingStore();
  const navigate = useNavigate();

  const handleNext = () => {
    if (!nickname.trim()) return;
    saveNickname(nickname);
    navigate('/signup/genre'); // 다음 단계로 이동
  };

  return (
    <div className="h-screen bg-[#121212] text-white flex flex-col items-center px-6 pt-20">
      <p className="text-[#E31221] text-sm mb-2">1/3</p>
      <h1 className="text-xl font-semibold mb-2">닉네임을 입력해주세요</h1>
      <p className="text-sm text-gray-400 mb-8">다른 유저에게 보여질 이름이에요</p>

      <input
        type="text"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        placeholder="닉네임을 입력하세요"
        className="w-full max-w-sm px-4 py-3 rounded-md bg-[#1E1E1E] text-white border border-gray-600 placeholder-gray-500 focus:outline-none mb-6"
      />

      <button
        onClick={handleNext}
        disabled={!nickname.trim()}
        className={`w-full max-w-sm py-3 rounded-md font-semibold ${
          nickname.trim()
            ? 'bg-[#E31221] text-white'
            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
        }`}
      >
        다음
      </button>
    </div>
  );
};

export default OnboardingNicknamePage;
