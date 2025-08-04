import { useNavigate } from 'react-router-dom';
import { Header, BottomNavigation, LevelCard } from '@/components';
import { EditIcon, ChevronRightIcon, MyProfileIcon } from '@/assets';
import { useState, useEffect } from 'react';
import type { UserProfile } from '@/types/user';

import api from '@/api/api';
import type { ApiError } from '@/types/api-response';

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
        const response = await api.get<UserProfile>('/profile');

        if (isMounted) {
          setUser(response.data);
        }
      } catch (err) {
        const apiError = err as ApiError;
        console.error('프로필 로딩 에러:', apiError);

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

<<<<<<< HEAD
  if (isLoading) {
    return <div>프로필 불러오는 중</div>;
  }
=======
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="min-h-screen">
        {/* Header - 병합 결과 */}
        <Header rightSection="SETTING">마이페이지</Header>
>>>>>>> 92aeb3f3605ce2777f17f10dd6f0e265415deca8

  if (error) {
    return <div>프로필 불러오기 실패: {error}</div>;
  }

  if (!user) {
    return <div>사용자 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="relative mx-auto w-full max-w-md text-white">
      <div className="min-h-screen">
        <Header title="마이페이지" showBack={false} showLike={false} showBookmark={false} />

        <main className="mt-2 flex flex-col gap-4 px-4 pb-[83px]">
          {/* 프로필 카드 */}
          <section className="rounded-lg bg-gray-800/30 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {user.profileImageUrl ? (
                  <img
                    src={user.profileImageUrl}
                    alt={`${user.nickname}의 프로필`}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                ) : (
                  <MyProfileIcon className="h-16 w-16" />
                )}
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