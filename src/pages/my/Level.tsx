import { useQuery } from '@tanstack/react-query';
import { Header } from '@/components';
import { LevelInfoCard, MyLevelCard } from '@/components';
import { LEVELS_DATA } from '@/constants/levelcondition';
import type { UserGradeResponse } from '@/types/level';
import { getUserGrade } from '@/api/user/level.api';

export default function LevelPage() {
  const { data, isLoading, error } = useQuery<UserGradeResponse>({
    queryKey: ['userGrade'],
    queryFn: getUserGrade,
  });

  if (isLoading) return <div className="text-center mt-10">로딩 중...</div>;
  if (error || !data) return <div className="text-center mt-10 text-red-400">데이터를 불러오지 못했습니다.</div>;

  return (
    <div className="px-4 py-3 text-white min-h-screen font-suit">
      <Header leftSection="BACK" rightSection="NONE"> </Header>

      <div className="pt-[52px]">
        <MyLevelCard 
          userLevel={data.grade}
          userProgress={data.levelExp}
          currentReviewCount={data.reviewCount}
          currentLikeCount={data.likeCount}
        />
      </div>

      <div className="w-[335px] h-[1px] bg-[#424242] mt-6 mb-6 mx-auto" />

      <div className="space-y-4">
        {LEVELS_DATA.map((levelData) => (
          <LevelInfoCard
            key={levelData.level}
            level={levelData.level}
            title={levelData.title}
            condition={levelData.condition}
            Icon={levelData.Icon}
          />
        ))}
      </div>
    </div>
  );
}
