import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button, Header } from '@/components';
import { MyProfileEditIcon, PencilIcon } from '@/assets';
import { updateUserProfile } from '@/api/user/userEdit.api';
import { useToastStore } from '@/store';
import { useUserProfileQuery } from '@/hooks/queries/useUserProfileQuery';


export default function ProfileEdit() {
  const navigate = useNavigate();
  const location = useLocation();
  const { show: showToast } = useToastStore();
  const { data: user, isLoading } = useUserProfileQuery();
  const [nickname, setNickname] = useState('');
  const [genres, setGenres] = useState<string[]>([]);
  const [auditoriums, setAuditoriums] = useState<string[]>([]);

  useEffect(() => {
  if (!user) return;

  const state = location.state;

  setNickname(state?.nickname ?? user.nickname);

  setGenres(
    Array.isArray(state?.genres) && state.genres.length > 0
      ? state.genres
      : user.genres
  );

  setAuditoriums(
    Array.isArray(state?.auditoriums) && state.auditoriums.length > 0
      ? state.auditoriums
      : user.auditoriums
  );
}, [user, location.state]);
  const handleNavigateToGenreSelect = () => {
    navigate('/my/select-genre', { state: { nickname, auditoriums } });
  };

  const handleNavigateToCinemaChoice = () => {
    navigate('/my/cinema-choice', { state: { nickname, genres } });
  };

  const handleSave = async () => {
    try {
      await updateUserProfile({
        nickname,
        genres,
        auditoriums,
      });
      showToast('프로필이 저장되었습니다.', 3000);
      navigate('/my');
    } catch (error) {
      showToast('저장에 실패했습니다.', 3000);
      console.error(error);
    }
  };

  return (
    <div className="font-suit flex h-screen flex-col text-white">
      <Header leftSection="BACK" rightSection="KEBAB" className="bg-gray-900" />
      <main className="flex-grow overflow-y-auto px-4 pt-[49px]">
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
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="mt-2 h-[46px] w-full rounded-md border border-gray-800 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 focus:outline-none"
            />
          </div>
        </section>

        <div className="mx-auto mt-2 flex h-[168px] w-[330px] flex-col justify-around gap-y-2">
          <button onClick={handleNavigateToGenreSelect} className="flex w-full justify-between text-left">
            <div>
              <h2 className="text-title-3 text-white">선호 장르</h2>
              <p className="text-caption-2 mt-2 text-red-300">{genres.join(', ')}</p>
            </div>
            <PencilIcon className="h-6 w-6" />
          </button>

          <button onClick={handleNavigateToCinemaChoice} className="flex w-full justify-between text-left">
            <div>
              <h2 className="text-title-3 text-white">즐겨찾는 영화관</h2>
              <div className="text-caption-2 mt-2 space-y-2 text-red-300">
                {auditoriums.map((a: string) => (
                  <p key={a}>{a}</p>
                ))}
              </div>
            </div>
            <PencilIcon className="h-6 w-6" />
          </button>
        </div>
      </main>

      <footer className="bg-gray-900 px-4 py-3">
        <Button
          variant="primary"
          color="red"
          size="lg"
          rounded="lg"
          className="w-full"
          fontType="title-3"
          onClick={handleSave}
          disabled={isLoading}
        >
          저장하기
        </Button>
      </footer>
    </div>
  );
}
