import { useNavigate } from 'react-router-dom';
import { Header, BottomNavigation, LevelCard } from '@/components';
import { EditIcon, ChevronRightIcon, MyProfileIcon } from '@/assets';
import React from 'react';

interface User {
  name: string;
  level: number;
  progress: number;
  preferredGenres: string[];
  favoriteTheaters: string[];
}

interface MenuItem {
  name: string;
  path: string;
}

const MyPage: React.FC = () => {
  const navigate = useNavigate();

  const user: User = {
    name: '김씨잇',
    level: 3,
    progress: 60,
    preferredGenres: ['호러', 'SF', '로맨스'],
    favoriteTheaters: ['남양주현대아울렛 스페이스원', '용산아이파크몰 (용아맥)'],
  };

  const menuItems: MenuItem[] = [
    { name: '나의 후기', path: '/my/reviews' },
    { name: '북마크', path: '/my/bookmarks' },
    { name: '의견 보내기', path: '/my/feedback' },
  ];

  const handleProfileEditClick = () => {
    navigate('/my/profile-edit');
  };

  return (
    <div className="relative mx-auto w-full max-w-md text-white">
      <div className="min-h-screen">
        
        <Header title="마이페이지" showBack={false} showLike={false} showBookmark={false} />

        <main className="mt-2 flex flex-col gap-4 px-4 pb-[83px]">
          {/* 프로필 카드 */}
          <section className="rounded-lg bg-gray-800/30 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <MyProfileIcon className="h-16 w-16" />
                <span className="text-title-2">{user.name}</span>
              </div>
              <button
                onClick={handleProfileEditClick}
                className="rounded-md bg-gray-950 p-2"
                aria-label="프로필 수정"
              >
                <EditIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <div className="flex h-[28px] w-[103px] shrink-0 items-center justify-center rounded-md bg-gray-800">
                  <span className="text-caption-1 text-white">선호 장르</span>
                </div>
                <div className="flex flex-wrap gap-x-3">
                  {user.preferredGenres.map((genre) => (
                    <span key={genre} className="text-caption-2">
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-[28px] w-[103px] shrink-0 items-center justify-center rounded-md bg-gray-800">
                  <span className="text-caption-1 text-white">자주 가는 영화관</span>
                </div>
                <div className="flex flex-col gap-1">
                  {user.favoriteTheaters.map((theater) => (
                    <span key={theater} className="text-caption-2 text-gray-500">
                      {theater}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 레벨 카드  */}
          <LevelCard userLevel={user.level} userProgress={user.progress} />

          {/* 메뉴 리스트 */}
          <section>
            <ul className="flex flex-col">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.path)}
                    className="flex w-full items-center justify-between px-2 py-4 text-left"
                  >
                    <span className="text-title-3 text-white">{item.name}</span>
                    <ChevronRightIcon className="h-5 w-5 text-gray-500" />
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>

      <div className="fixed bottom-0 w-full max-w-md left-1/2 -translate-x-1/2">
        <BottomNavigation />
      </div>
    </div>
  );
};

export default MyPage;