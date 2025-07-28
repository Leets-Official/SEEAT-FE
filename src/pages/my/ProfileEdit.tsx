import { useNavigate } from 'react-router-dom';
import Button from '@/components/common/Button';
import ChevronIcon from '@/assets/icons/chevron.svg?react';
import MyProfileEditIcon from '@/assets/icons/my_profile_edit.svg?react';
import PencilIcon from '@/assets/icons/pencil.svg?react';
import MoreVerticalIcon from '@/assets/icons/more_vertical.svg?react';

export default function ProfileEdit() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    window.history.back();
  };

  const handleNavigateToGenreSelect = () => {
    navigate('/my/select-genre');
  };
    const handleNavigateToCinemaChoice = () => {
    navigate('/my/cinema-choice');
  };

  return (
    <div className="flex h-screen flex-col bg-gray-900 font-suit text-white">
      {/* Header */}
      <header className="flex flex-shrink-0 items-center justify-between px-4 py-3">
        <button onClick={handleBackClick} aria-label="뒤로가기">
          <ChevronIcon className="h-6 w-6" />
        </button>
        <button aria-label="더보기">
          <MoreVerticalIcon className="h-6 w-6" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow overflow-y-auto px-4">
        {/* 프로필 정보 섹션 */}
        <section className="mt-4 flex flex-col items-center rounded-xl bg-gray-800/30 px-4 py-6">
          <button className="mb-6" aria-label="프로필 사진 변경">
            <MyProfileEditIcon className="h-20 w-20" />
          </button>
          <div className="w-full">
            <label htmlFor="nickname" className="text-caption-2 text-gray-300">
              닉네임
            </label>
            <input
              id="nickname"
              type="text"
              defaultValue="김씨잇"
              className="mt-2 h-[46px] w-full rounded-md border border-gray-800 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:outline-none"
            />
          </div>
        </section>

        <div className="mx-auto mt-10 flex h-[168px] w-[330px] flex-col justify-around">
          <button
            onClick={handleNavigateToGenreSelect}
            className="flex w-full items-start justify-between text-left"
          >
            <div>
              <h2 className="text-title-3 text-white">선호 장르</h2>
              <p className="text-caption-2 mt-2 text-red-300">호러, SF, 로맨스</p>
            </div>
            <PencilIcon className="h-6 w-6 flex-shrink-0" />
          </button>

          {/* 즐겨찾는 영화관 섹션 */}
          <button onClick={handleNavigateToCinemaChoice} className="flex w-full items-start justify-between text-left">
            <div>
              <h2 className="text-title-3 text-white">즐겨찾는 영화관</h2>
              <div className="text-caption-2 mt-2 space-y-2 text-red-300">
                <p>남양주현대아울렛 스페이스원</p>
                <p>용산아이파크몰 (용아맥)</p>
              </div>
            </div>
            <PencilIcon className="h-6 w-6 flex-shrink-0" />
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex-shrink-0 bg-gray-900 px-4 py-3">
        <Button variant="primary" color="red" size="lg" rounded="lg" className="w-full" fontType="title-3">
          저장하기
        </Button>
      </footer>
    </div>
  );
}