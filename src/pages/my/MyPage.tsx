import { useNavigate } from 'react-router-dom';

import HomeHeader from '@/components/common/Header/HomeHeader';
import BottomNavigation from '@/components/common/BottomNavigation/BottomNavigation';

import EditIcon from '@/assets/icons/pencil.svg?react';
import ChevronRightIcon from '@/assets/icons/chevron_right.svg?react';
import MyProfileIcon from '@/assets/icons/my_profile.svg?react';

const MyPage = () => {
  const navigate = useNavigate();
  const user = {
    name: '김씨잇',
    level: 3,
    levelTitle: '영화계의 권위자',
    progress: 60,
    preferredGenres: ['호러', 'SF', '로맨스'],
    favoriteTheaters: ['남양주현대아울렛 스페이스원', '용산아이파크몰 (용아맥)'],
  };

  const menuItems = ['나의 후기', '북마크', '의견 보내기'];

  const handleSettingsClick = () => {
    navigate('/my/settings');
  };

  const handleProfileEditClick = () => {
    navigate('/my/profile-edit');
  };

  return (
    <div className="bg-gray-900">
      <div className="relative mx-auto w-full max-w-md bg-gray-950 text-white">
        <div className="min-h-screen">
          <HomeHeader onSettingsClick={handleSettingsClick} />

          <main className="mt-2 flex flex-col gap-4 px-4 pb-[83px]">
            {/* 프로필 카드 */}
            <section className="rounded-lg bg-gray-800/30 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <MyProfileIcon className="h-16 w-16" />
                  <span className="text-title-2">{user.name}</span>
                </div>
                <button onClick={handleProfileEditClick} className="rounded-md bg-gray-950 p-2" aria-label="프로필 수정">
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

            {/* 레벨 카드 */}
            <section className="h-[140px] rounded-lg bg-gray-800/30 p-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-title-1 text-red-400">Lv.{user.level}</span>
                    <span className="text-title-4 text-white">{user.levelTitle}</span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-gray-950">
                    <div className="h-full rounded-full bg-red-300" style={{ width: `${user.progress}%` }} />
                  </div>
                  <p className="mt-3 text-caption-3 text-gray-300">
                    다음 레벨까지 할 일은... <br />
                    후기 <span className="text-red-400">OO</span>개, 좋아요 <span className="text-red-400">OO</span>개
                    누르기
                  </p>
                </div>
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-md border border-dashed border-gray-700 bg-transparent">
                  <span className="text-center text-caption-3 text-gray-500">
                    레벨 캐릭터
                    <br />
                    이미지
                  </span>
                </div>
              </div>
            </section>

            {/* 메뉴 리스트 */}
            <section>
              <ul className="flex flex-col">
                {menuItems.map((item) => (
                  <li key={item}>
                    <button className="flex w-full items-center justify-between px-2 py-4 text-left">
                      <span className="text-title-3 text-white">{item}</span>
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
    </div>
  );
};

export default MyPage;