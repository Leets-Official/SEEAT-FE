import { useNavigate } from 'react-router-dom';
import { Header, BottomNavigation, LevelCard, ProfileImageWithFallback } from '@/components';
import { EditIcon, ChevronRightIcon } from '@/assets';
import { useState, useEffect } from 'react';
import type { UserProfile, Auditorium } from '@/types/user';
import type { ApiError } from '@/types/api-response';
import { getUserProfile } from '@/api/profile/profile.api';

interface MenuItem {
  name: string;
  path: string;
}

const MyPage: React.FC = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchUserProfile = async () => {
      try {
        const userData = await getUserProfile();
        if (isMounted) {
          setUser(userData);
        }
      } catch (err) {
        const apiError = err as ApiError;
        if (isMounted) {
          setError(apiError.message);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };
    fetchUserProfile();
    return () => {
      isMounted = false;
    };
  }, []);

  const menuItems: MenuItem[] = [
    { name: '나의 후기', path: '/my/reviews' },
    { name: '북마크', path: '/my/bookmarks' },
    { name: '의견 보내기', path: '/my/feedback' },
  ];

  const handleProfileEditClick = () => {
    navigate('/my/profile-edit');
  };
  
  const handleSettingsClick = () => {
    navigate('/my/settings');
  };

  const handleLevelCardClick = () => {
    navigate('/my/level'); // 경로를 '/my/level'로 수정했습니다.
  };

  if (isLoading) {
    return <div>프로필 불러오는 중</div>;
  }

  if (error) {
    return <div>프로필 불러오기 실패: {error}</div>;
  }

  if (!user) {
    return <div>사용자 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="relative mx-auto w-full max-w-md text-white">
      <div className="min-h-screen">
        <Header
          leftSection="LOGO"
          rightSection="SETTING"
          onSettingsClick={handleSettingsClick}
        />

        <main className="flex flex-col gap-4 px-4 pb-[83px] pt-[63px]">
          {/* 프로필 카드 */}
          <section className="rounded-lg bg-gray-800/30 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <ProfileImageWithFallback
                  src={user.imageUrl}
                  alt={`${user.nickname}의 프로필`}
                  className="h-20 w-20 shrink-0"
                />
                <span className="text-title-2">{user.nickname}</span>
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
                  {(user.genres || []).map((genre: string) => (
                    <span key={genre} className="text-caption-2">
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-[28px] w-[103px] shrink-0 items-center justify-center rounded-md bg-gray-800">
                  <span className="text-caption-1 text-white">자주 가는 영화관</span>
                </div>
                <div className="flex flex-col gap-1">
                  {(user.auditoriums || []).map((auditorium: Auditorium) => (
                    <span key={auditorium.id} className="text-caption-2 text-gray-500">
                      {auditorium.theaterName}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div onClick={handleLevelCardClick} className="cursor-pointer">
            <LevelCard
              userProgress={user.levelExp}
              currentReviewCount={user.reviewCount}
              currentLikeCount={user.likeCount}
            />
          </div>

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